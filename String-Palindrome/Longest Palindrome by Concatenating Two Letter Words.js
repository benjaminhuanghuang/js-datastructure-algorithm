/*
2131. Longest Palindrome by Concatenating Two Letter Words

Medium

https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
*/

/*
  https://www.youtube.com/watch?v=Orqh0Pzb7Q0&ab_channel=HuifengGuan
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const countAB = new Map(); //ab 可以与 ba 组成 Palindrome
  const countBA = new Map(); //ba
  const countXX = new Map(); //xx 型

  for (const w of words) {
    if (w[0] == w[1]) {
      //xx 型
      countXX.set(w, (countXX.get(w) || 0) + 1);
    } else {
      const key = Array.from(w).sort().join("");
      if (key == w) {
        countAB.set(key, (countAB.get(key) || 0) + 1);
      } else {
        countBA.set(key, (countBA.get(key) || 0) + 1);
      }
    }
  }

  let ret = 0;
  for (const [key, val] of countAB) {
    const ab = countAB.get(key) || 0;
    const ba = countBA.get(key) || 0;
    ret += Math.min(ab, ba) * 2 * 2;
  }
  console.log(countAB, countBA);
  let flag = 0;
  for (const [key, val] of countXX) {
    ret += Math.floor(val / 2) * 2 * 2;
    if (val % 2 == 1) flag = 1;
  }
  // xx 型的字符串可以在当中放一个
  return ret + flag * 2;
};
