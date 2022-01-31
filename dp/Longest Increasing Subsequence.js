/*

300. Longest Increasing Subsequence

Medium

https://leetcode.com/problems/longest-increasing-subsequence

# 354. Russian Doll Envelopes
*/

/*
  recursion + memoization

  O(N^2)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n == 0) return 0;
  const mem = new Array(n).fill(0);
  let ans = 0;

  // length of LIS ends with nums[i]
  const LIS = (i) => {
    if (i == 0) return 1;
    if (mem[i] > 0) return mem[i];

    let ans = 1;
    for (let i_sub = 0; i_sub < i; ++i_sub) {
      // check the chars before i, can append nums[i] to the LIS end nums[]
      if (nums[i] > nums[i_sub]) {
        ans = Math.max(ans, LIS(i_sub) + 1);
      }
    }
    mem[i] = ans;
    return mem[i];
  };

  for (let i = 0; i < n; ++i) {
    ans = Math.max(ans, LIS(i));
  }
  return ans;
};

/*
https://www.youtube.com/watch?v=7DKFpWnaxLI&ab_channel=HuaHua

    DP
    O(N^2)
  */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let n = nums.length;
  const dp = new Array(n).fill(1);
  for (
    let i = 1;
    i < n;
    ++i // sub array 长度
  )
    for (
      let j = 0;
      j < i;
      ++j // 以j结尾
    )
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);

  let max = 0;

  return Math.max(...dp);
};
/*
https://www.youtube.com/watch?v=Q6KyDl_xiIg&ab_channel=HuifengGuan

https://www.youtube.com/watch?v=l2rCz7skAlk&t=7s&ab_channel=HuaHua


 Binary Search

Time complexity: O(nlogn)
Space complexity: O(n)

*/

var lengthOfLIS = function (nums) {
  // q 的含义为 长度为i的LIS的结尾元素是q[i]
  const q = [];
  for (let i = 0; i < nums.length; ++i) {
    let left = 0,
      right = q.length,
      target = nums[i];
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (q[mid] >= target) right = mid;
      else left = mid + 1;
    }
    if (left >= q.length) {
      // 没有找到
      q.push(target);
    } else {
      q[left] = target;
    }
  }
  return q.length;
};
