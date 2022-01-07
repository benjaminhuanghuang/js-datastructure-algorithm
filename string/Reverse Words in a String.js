/*
151. Reverse Words in a String
Return a string of the words in reverse order concatenated by a single space.

https://leetcode.com/problems/reverse-words-in-a-string/
*/

/*
  这个解法没有把多个空格转化成一个空格
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  s = reverseStr(s, 0, s.length - 1);

  let start = 0,
    end = 0;
  while (start < s.length) {
    if (s[start] == " ") continue;
    end = start;
    while (end < s.length && s[end] != " ") ++end;
    s = reverseStr(s, start, end - 1);
    start = end;
    while (start < s.length && s[start] == " ") ++start;
  }
  return s;
};

function reverseStr(s, i, j) {
  const charArr = Array.from(s);

  let l = i;
  r = j;
  while (l < r) {
    const tmp = charArr[l];
    charArr[l] = charArr[r];
    charArr[r] = tmp;

    l++;
    r--;
  }

  return charArr.join("");
}
