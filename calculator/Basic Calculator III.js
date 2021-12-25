/*

772. Basic Calculator III


https://leetcode.com/problems/basic-calculator-iii/
https://www.lintcode.com/problem/849/


Support *, /,  ()
*/

/*
  基于 Basic Calculator II 的思想，使用recursion 计算 () 中的值
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
     //recursively calculate results in parentheses
     if (ch == '(') {
      const j = findClosing(s.substring(i));
      pre = calculate(s.substring(i + 1, i + j));
      i += j;
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

function findClosing(s) {
  let level = 0, i = 0;
  for (i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '(')
          level++;
      else if (s.charAt(i) == ')') {
          level--;
          if (level == 0)
              break;
      }
  }
  return i;
}