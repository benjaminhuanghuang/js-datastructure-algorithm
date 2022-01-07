/*
1578. Minimum Time to Make Rope Colorful

https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
*/

/*
For a group of same letters, delete all expect the one with the highest cost.

Time complexity: O(n)
Space complexity: O(1)

*/

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let sum = neededTime[0];
  let longest = neededTime[0];

  let ans = 0;
  for (let i = 1; i < colors.length; ++i) {
    if (colors[i] != colors[i - 1]) {
      ans += sum - longest;
      sum = longest = 0;
    }
    // sampe color
    sum += neededTime[i];
    longest = Math.max(longest, neededTime[i]);
  }
  return ans + (sum - longest);
};
