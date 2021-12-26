/*
494. Target Sum

Level: Medium

https://leetcode.com/problems/target-sum
*/

/*
  思路：用从pos开始的 数字构造 target
  DFS
  Time complexity: O(2^n)
  Space complexity: O(n)

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let ans = 0;

  const dfs = (target, pos) => {
    if (pos == nums.length) {
      if (target == 0) ++ans;
      return;
    }
    dfs(target + nums[pos], pos + 1);
    dfs(target - nums[pos], pos + 1);
  };

  dfs(target, 0);
  return ans;
};
