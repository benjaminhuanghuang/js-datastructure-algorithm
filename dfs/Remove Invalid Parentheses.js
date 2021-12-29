/*
301. Remove Invalid Parentheses

[Hard]

https://leetcode.com/problems/remove-invalid-parentheses/

Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]

Input: s = ")("
Output: [""]
*/

/*
https://www.youtube.com/watch?v=2k_rS_u6EBk&ab_channel=HuaHua
1. check valid

2. 移除多少 ( 或 ）可以使s合法

3. dfs

4. 如何去重  当有连续的(或)， 只移除第一个


Time Complexity  O(2^(l+r))   因为对于每个左右括号(总共了l + r个， 都有两种选择，删和不删)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  // 需要删除几个(或)
  let l = 0;
  let r = 0;
  for (const c of s) {
    if (c == "(") {
      l++;
    }
    if (c == ")") {
      if (l == 0) {
        r++;
      } else {
        // ) can match a (
        l--;
      }
    }
  }

  const ans = [];

  const isValid = (s) => {
    let count = 0;
    for (const c of s) {
      if (c == "(") count++;
      if (c == ")") count--;
      if (count < 0) return false;
    }
    return count == 0;
  };

  const dfs = (s, start, l, r) => {
    if (l == 0 && r == 0) {
      if (isValid(s)) ans.push(s);
    }

    for (let i = start; i < s.length; i++) {
      // only remove the first one
      if (i != start && s[i] == s[i - 1]) continue;
      if (s[i] == "(" || s[i] == ")") {
        const curr = s.slice(0, i) + s.slice(i + 1);
        if (r > 0) dfs(curr, i, l, r - 1);
        else if (l > 0) dfs(curr, i, l - 1, r);
      }
    }
  };
  dfs(s, 0, l, r);
  return ans;
};
