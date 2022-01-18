/*
1002. Find Common Characters

Easy

https://leetcode.com/problems/find-common-characters/
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 记录字符在每个word中出现的次数， 取最小值
  const min_count = new Array(26).fill(Number.MAX_SAFE_INTEGER);

  for (const word of words) {
    const count = new Array(26).fill(0);
    for (const ch of word) {
      ++count[ch.charCodeAt(0) - "a".charCodeAt(0)];
    }
    for (let i = 0; i < 26; ++i) {
      min_count[i] = Math.min(min_count[i], count[i]);
    }
  }

  const ans = [];
  for (let i = 0; i < 26; ++i) {
    if (min_count[i] == Number.MAX_SAFE_INTEGER) continue;
    for (let j = 0; j < min_count[i]; ++j) {
      ans.push(String.fromCharCode("a".charCodeAt(0) + i));
    }
  }
  return ans;
};
