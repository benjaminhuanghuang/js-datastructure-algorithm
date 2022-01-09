/*
739. Daily Temperatures

Level: Medium

https://leetcode.com/problems/daily-temperatures
*/

/*
  Solution: 
  https://zxi.mytechroad.com/blog/algorithms/array/leetcode-739-daily-temperatures/

  Stack

    Use a stack to track indices of future warmer days. t[i] < t[i-1]

    Time complexity: O(n)

    Space complexity: O(n)

*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const ans = new Array(temperatures.length);
  for (let i = temperatures.length - 1; i >= 0; --i) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      // when t[stack.top] <= t[i]
      stack.pop();
    }
    ans[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }
  return ans;
};
