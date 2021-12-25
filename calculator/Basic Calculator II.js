/*
227. Basic Calculator II

https://leetcode.com/problems/basic-calculator-ii/

Support * / , no ()
*/

/*
  https://www.cnblogs.com/grandyang/p/4601208.html
  使用一个栈保存数字，如果该数字之前的符号是+，把当前数字压入栈中，如果是-，则加入当前数字的相反数，
  如果之前的符号是乘或除，那么从栈顶取出一个数字和当前数字进行乘或除的运算，再把结果压入栈中，
  完成一遍遍历后，所有的乘或除都运算完了，再把栈中所有的数字都加起来
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
