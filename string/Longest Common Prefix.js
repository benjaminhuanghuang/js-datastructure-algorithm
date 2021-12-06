/*
14. Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let ans = "";
  // based on strs[0]
  for (let i = 0; i < strs[0].length; ++i) {
    for (const s of strs) {
      if (s.length <= i || s[i] != strs[0][i]) return ans;
    }
    ans += strs[0][i];
  }
  return ans;
};
