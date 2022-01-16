/*
557. Reverse Words in a String III

https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords_lazy = function (s) {
  // step 1: tokenize s into words
  const tokens = s.split(" ");
  // step 2: reverse each word
  for (let i = 0; i < tokens.length; i++) {
    const characters = tokens[i].split("");
    characters.reverse();
    tokens[i] = characters.join("");
  }
  // step 3: join the reversed word back to a new sentence
  return tokens.join(" ");
};

var reverseWords = function (s) {
  const charArr = Array.from(s);
  let start = 0;
  while (start < s.length) {
    while (charArr[start] == " " && start < s.length) {
      start++;
    }
    let end = start;
    while (charArr[end] != " " && end < s.length) {
      end++;
    }
    reverseStr(charArr, start, end - 1);
    start = end + 1;
  }
  return charArr.join("");
};

function reverseStr(charArr, i, j) {
  let l = i;
  r = j;
  while (l < r) {
    const tmp = charArr[l];
    charArr[l] = charArr[r];
    charArr[r] = tmp;

    l++;
    r--;
  }
}
