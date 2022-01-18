/*
224. Basic Calculator

Hard

https://leetcode.com/problems/basic-calculator/description/

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let len = s.length;
  if (len === 0) return 0;
  let stack = [];

  let res = 0;
  let sign = 1;

  // remove space
  s.replace(" ", "");

  for (let i = 0; i < len; i++) {
    let c = s.charAt(i);
    // 如果是数字，就计算 sign和这个数字
    if (isDigit(c)) {
      let num = parseInt(c);
      while (i + 1 < len && isDigit(s.charAt(i + 1))) {
        num = num * 10 + parseInt(s.charAt(i + 1));
        i++;
      }
      res += num * sign;
    } else if (c === "-") {
      sign = -1;
    } else if (c === "+") {
      sign = 1;
    } else if (c === "(") {
      // 遇到 ( 保存当前的res和sign
      stack.push(res);
      res = 0;
      stack.push(sign);
      sign = 1;
    } else if (c === ")") {
      // res = curr res * saved sign + saved res
      res = res * stack.pop() + stack.pop();
    }
  }

  return res;
};

function isDigit(c) {
  return c.charCodeAt(0) >='0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0);
}