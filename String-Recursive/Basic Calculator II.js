/*
227. Basic Calculator II

https://leetcode.com/problems/basic-calculator-ii/

Support * / , no ()
*/

/*
  https://www.cnblogs.com/grandyang/p/4601208.html
  遇到运算符，保存在变量op中
  遇到数字，根据op中的保存的运算符进行计算
    + - 把数字压栈
    * / 从栈中pop 出一个操作数，和当前操作数运算， 并压栈

  最后把栈中的数字加起来
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0,
    num = 0,
    n = s.length;
  let op = "+"; // last sign
  const stack = [];
  for (let i = 0; i < n; ++i) {
    // collect number
    if (s.charCodeAt(i) >= "0".charCodeAt(0) && s.charCodeAt(i) <= "9".charCodeAt(0)) {
      num = num * 10 + parseInt(s.charAt(i));
    }

    // if find operator or reach end, calculate last operation with current nubmer
    // 这里不能使用 else， 因为最后一个数字，同时满足数字，最后一个元素 两个条件
    if ("+-*/".includes(s.charAt(i)) || i == n - 1) {
      if (op == "+") stack.push(num);
      if (op == "-") stack.push(-num);
      if (op == "*" || op == "/") {
        const leftOperand = stack.pop();
        // Math.floor 对于负数除法会出错
        const tmp = op == "*" ? leftOperand * num : Math.trunc(leftOperand / num);
        stack.push(tmp);
      }
      op = s[i];
      num = 0;
    }
  }

  while (stack.length > 0) {
    res += stack.pop();
  }
  return res;
};
