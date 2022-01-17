/*

1249. Minimum Remove to Make Valid Parentheses

Medium

https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de
*/

/*
Count how many “(” are open and how many “)” left.

Time complexity: O(n)
Space complexity: O(1)

*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let close = [...s].reduce(function (prev, cur) {
    return prev + (cur == ")" ? 1 : 0);
  }, 0);
  let open = 0;
  let ans = "";

  for (const c of s) {
    if (c == "(") {
      // if (open == close) means should remove / exclude current (
      if (open == close) continue;
      ++open;
    } else if (c == ")") {
      --close;
      // if (open == 0) means should remove / exclude current )
      if (open == 0) continue;
      --open;
    }
    ans += c;
  }
  return ans;
};
