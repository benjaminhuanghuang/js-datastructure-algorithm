/*
22. Generate Parentheses
https://leetcode.com/problems/generate-parentheses/
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  // left count and right count
  const dfs = (ans, curr, l, r) => {
    if (l == 0 && r == 0) {
      ans.push(curr);
      return;
    }
    if (l > 0) {
      dfs(ans, curr + "(", l - 1, r);
    }
    if (r > l) {
      dfs(ans, curr + ")", l, r - 1);
    }
  };

  if (n > 0) {
    dfs(ans, "", n, n);
  }
  return ans;
};
