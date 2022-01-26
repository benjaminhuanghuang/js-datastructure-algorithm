/*

1143. Longest Common Subsequence

https://leetcode.com/problems/longest-common-subsequence/
*/

/*
https://www.youtube.com/watch?v=Ua0GhsJSlWM&ab_channel=NeetCode


https://www.youtube.com/watch?v=ASoaQq66foQ&ab_channel=BackToBackSWE
sub-problem

lcs("aab", "azb") = 1 + lcs("aa", "az") 
lcs("aa", "az")  = max(lcs("a", "az") , lcs("aa", "a") )
lcs("a", "az")  = max(lcs("", "az") , lcs("a", "a") )

*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const mem = new Map();

  // i, j is the index of text1, text2
  // return the lcs of text1[0, i] and text2[0, j]
  const lcs = (i, j) => {
    if (i < 0 || j < 0) return 0;
    const memKey = i + " " + j;
    if (mem.has(memKey)) return mem.get(memKey);
    let lcs = 0;
    if (text1.charAt(i) == text2.charAt(j)) {
      // text1 和 text2的最后一个字符一样
      lcs = 1 + lcs(i - 1, j - 1);
    } else {
      // text1 和 text2的最后一个字符不同， 分别砍掉一个试试
      lcs = Math.max(lcs(i - 1, j), lcs(i, j - 1));
    }
    mem.set(memKey, lcs);
    return lcs;
  };

  return lcs(text1.length - 1, text2.length - 1);
};

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length();
  const n = text2.length();
  const dp = Array.from(Array(m + 1), () => Array(n).fill(0));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (text1[i] == text2[j]) dp[i + 1][j + 1] = dp[i][j] + 1;
      else dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }
  return dp[m][n];
};
