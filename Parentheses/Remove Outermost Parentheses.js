/*
1021. Remove Outermost Parentheses

Easy

https://leetcode.com/problems/remove-outermost-parentheses/

Input: s = "(()())(())"
Output: "()()()"

*/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ans = "";
  // the # of opened parentheses after current char
  let open = 0;
  for (const c of s) {
    if (c == "(") {
      open++;
      // open == 1 means the current ( is the outermost(
      if (open != 1) ans += c;
    }
    if (c == ")") {
      open--;
      if (open != 0) ans += c;
    }
  }
  return ans;
};

var removeOuterParentheses = function (s) {
  const stack = [];
  let ans = "";
  //
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (stack.length === 0) {
        ans += s.substring(index + 1, i);
        index = i + 1;
      }
    }
  }
  return ans;
};
