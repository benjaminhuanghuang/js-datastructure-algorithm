/*

20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for (const char of s) {
    if (["{", "[", "("].includes(char)) {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] == map[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
