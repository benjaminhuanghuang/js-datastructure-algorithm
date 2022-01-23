/*
241. Different Ways to Add Parentheses

Medium

https://leetcode.com/problems/different-ways-to-add-parentheses

#139. Word Break
*/

/*
  https://www.youtube.com/watch?v=gxYV8eZY0eQ&ab_channel=HuaHua
  记忆化 递归求解

*/
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const mem = new Map();

  const ways = (input) => {
    if (mem.has(input)) return mem.get(input);

    const ans = [];

    for (let i = 0; i < input.length; i++) {
      const op = input[i];
      if (op == "+" || op == "-" || op == "*") {
        const left = input.substring(0, i);
        const right = input.substring(i + 1);

        const leftWays = ways(left);
        const rightWays = ways(right);
        let f;
        switch (op) {
          case "+":
            f = (a, b) => a + b;
            break;
          case "-":
            f = (a, b) => a - b;
            break;
          case "*":
            f = (a, b) => a * b;
            break;
        }
        for (const l of leftWays) {
          for (const r of rightWays) {
            ans.push(f(l, r));
          }
        }
      }
    }
    if (ans.length == 0) {
      // input is a number
      ans.push(parseInt(input));
    }
    mem.set(input, ans);
    return ans;
  };
  return ways(expression);
};
