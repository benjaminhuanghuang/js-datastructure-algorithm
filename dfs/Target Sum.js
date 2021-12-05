/*
494. Target Sum

Level: Medium

https://leetcode.com/problems/target-sum
*/

/*

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

  const dfs = (nums, target, pos) => {
    if (pos == nums.length) {
      if (target == 0) ++ans;
      return;
    }
    dfs(nums, target + nums[pos], pos + 1);
    dfs(nums, target - nums[pos], pos + 1);
  };

  dfs(nums, target, 0);
  return ans;
};
