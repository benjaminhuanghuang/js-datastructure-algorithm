/*
491. Increasing Subsequences

Medium

https://leetcode.com/problems/increasing-subsequences
*/

/*
  https://www.youtube.com/watch?v=HYLLwAOL-0M&ab_channel=HuifengGuan

  模版写法
  注意
  The given array may contain duplicates. 因为相邻的数不临界，又不能排序，所以要用set
*/
var findSubsequences = function (nums) {
  const ans = [];

  const dfs = (pos, curr) => {
    if (curr.length > 1) {
      ans.push([...curr]);
    }
    if (pos == nums.length) return;

    const used = new Set();
    for (let i = pos; i < nums.length; ++i) {
      // nums[i] < last num of curr
      if (curr.length > 0 && nums[i] < curr[curr.length - 1]) continue;
      // each number can be used only once at the same depth.
      if (used.has(nums[i])) continue;
      used.add(nums[i]);
      curr.push(nums[i]);
      dfs(i + 1, curr);
      curr.pop();
    }
  };

  dfs(0, []);
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = [];

  const dfs = (pos, curr) => {
    const used = new Set();
    for (let i = pos; i < nums.length; ++i) {
      // nums[i] < last num of curr
      if (curr.length > 0 && nums[i] < curr[curr.length - 1]) continue;
      // each number can be used only once at the same depth.
      if (used.has(nums[i])) continue;
      used.add(nums[i]);
      curr.push(nums[i]);
      if (curr.length > 1) ans.push([...curr]);
      dfs(i + 1, curr);
      curr.pop();
      // 注意这里不要 used.delete(nums[i]);
    }
  };

  dfs(0, []);
  return ans;
};
