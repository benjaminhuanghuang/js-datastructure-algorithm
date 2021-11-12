/*
224. Basic Calculator

https://leetcode.com/problems/basic-calculator/description/
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
    if (!isNaN(parseInt(c))) {
      let cur = parseInt(c);
      while (i + 1 < len && !isNaN(parseInt(s.charAt(i + 1)))) {
        cur = cur * 10 + parseInt(s.charAt(i + 1));
        i++;
      }
      res += cur * sign;
    } else if (n === "-") {
      sign = -1;
    } else if (n === "+") {
      sign = 1;
    } else if (n === "(") {
      stack.push(res);
      res = 0;
      stack.push(sign);
      sign = 1;
    } else if (n === ")") {
      // res = curr res * saved sign + saved res
      res = res * stack.pop() + stack.pop();
    }
  }

  return res;
};
