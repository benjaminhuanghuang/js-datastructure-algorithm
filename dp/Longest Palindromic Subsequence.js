/*
  516. Longest Palindromic Subsequence

  https://leetcode.com/problems/longest-palindromic-subsequence/

  # 5. Longest Palindromic Substring
  # 647. Palindromic Substrings
*/

/*
  to length 1, 
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const mem = new Map();
  const dfs = (start, end) => {
    if (start == end) return 1;
    if (start > end) return 0;
    const memKey = start + " " + end;
    if (mem.has(memKey)) return mem.get(memKey);

    let ans;
    if (s.charAt(start) == s.charAt(end)) {
      let subAns = dfs(start + 1, end - 1);
      ans = subAns + 2;
    } else {
      ans = Math.max(dfs(start + 1, end), dfs(start, end - 1));
    }

    mem.set(memKey, ans);
    return ans;
  };
  const ans = dfs(0, s.length - 1);
  return ans;
};
