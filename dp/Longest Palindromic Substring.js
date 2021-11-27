/*

5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/
*/

/*

Try all possible i and find the longest palindromic string whose center is i (odd case) and i / i + 1 (even case).

Time complexity: O(n^2)

Space complexity: O(1)

*/

/*
Try all possible i and find the longest palindromic string whose center is i (odd case) and i / i + 1 (even case).

Time complexity: O(n^2)

Space complexity: O(1)
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getLen = (s, l, r) => {
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      l--;
      r++;
    }
    return r - l - 1;
  };
  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < s.length; ++i) {
    let len = Math.max(getLen(s, i, i), getLen(s, i, i + 1));
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
};
