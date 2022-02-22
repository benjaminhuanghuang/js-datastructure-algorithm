/*
387. First Unique Character in a String

Easy
https://leetcode.com/problems/first-unique-character-in-a-string/


*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  if (s == null || s.length === 0) return -1;
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in dict) dict[s[i]]++;
    else dict[s[i]] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] == 1) return i;
  }
  return -1;
};
