/*
377. Combination Sum IV

https://leetcode.com/problems/combination-sum-iv/
*/

/*
  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-377-combination-sum-iv/
  
  这道题实际是求permutation

  dfs(nums, target)  // returns all combimation that use nums to sum up to target
    if(target == 0) return []

    return Union{ nums[i] * dp(nums, target-nums[i])}

  需要记忆每个target 要几个解

  Time: O(sum(target/num_i))
  Space: O(target)  需要记忆每个target 要几个解
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_Wrong = function (nums, target) {
  let ans = 0;

  const dfs = (target, pos) => {
    if (target == 0) {
      ans++;
      return;
    }

    for (let i = pos; i < nums.length; i++) {
      if (nums[i] > target) break;
      dfs(target - nums[i], i);
    }
  };

  dfs(target, 0);
  return ans;
};

/*
  Recursion + Memorization
*/
var combinationSum4 = function (nums, target) {
  const mem = new Array(target + 1).fill(-1);
  mem[0] = 1;

  const dfs = (target) => {
    if (target < 0) {
      return 0;
    }
    if (mem[target] != -1) return mem[target];
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
      ans += dfs(target - nums[i]);
    }
    mem[target] = ans;
    return ans;
  };

  return dfs(target);
};
/*
  DP
*/
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0); // dp[i] # of combinations sum up to i
  dp[0] = 1;
  for (let i = 1; i <= target; ++i) {
    for (const num of nums) {
      if (i - num >= 0) dp[i] += dp[i - num];
    }
  }
  return dp[target];
};
