/*
494. Target Sum


Medium

https://leetcode.com/problems/target-sum

[FB]
*/

/*
https://www.youtube.com/watch?v=g0npyaQtAQM&ab_channel=NeetCode

DFS + Memorization
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {

};


/*
 DFS
  tree hight : N,  2 branchs pre node, so the Time complexity is O(2^N)
*/
var findTargetSumWays = function (nums, target) {
  const dfs = (pos, target) => {
    if (pos == nums.size()) {
      if (target == 0) ++ans;
      return;
    }
    dfs(pos + 1, target - nums[d]);
    dfs(pos + 1, target + nums[d]);
  };

  const sum = nums.reduce((s, i) => s + i);
  if (sum < Math.abs(target)) return 0;
  let ans = 0;
  dfs(0, target);
  return ans;
};
/*
  DP

  Time complexity: O(n*sum)

  Space complexity: O(n*sum)
*/

var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((s, i) => s + i);
  if (sum < Math.abs(target)) return 0;
  const offset = sum;
  // ways[i][j] means total ways to sum up to (j - offset) using nums[0] ~ nums[i - 1].
  const ways = Array.from(Array(n + 1), Array(sum + offset + 1).fill(0));
  ways[0][offset] = 1;
  for (let i = 0; i < n; ++i) {
    for (let j = nums[i]; j < 2 * sum + 1 - nums[i]; ++j)
      if (ways[i][j]) {
        ways[i + 1][j + nums[i]] += ways[i][j];
        ways[i + 1][j - nums[i]] += ways[i][j];
      }        
  }
  
  return ways.back()[S + offset];
};