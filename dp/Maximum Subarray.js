/*
  53. Maximun Subarray

  Easy

  https://leetcode.com/problems/maximum-subarray/

  Maximum Subarray
*/

/**
  DP
*/
var maxSubArray = function (nums) {
  // solution[i] is the solution of sub array end with nums[i]
  const solution = new Array(nums.length);

  solution[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // use nums[i] or start a new sum
    solution[i] = Math.max(solution[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...solution);
};

var maxSubArray = function (nums) {
  // max subarry ends with pos i
  const dp = (i) => {
    if (i == 0) {
      return nums[i];
    }
    return Math.max(dp(i - 1) + nums[i], nums[i]); // when dp(i-1) < 0, only use nums[i]
  };

  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    maxSum = Math.max(maxSum, dp(i));
  }
  return maxSum;
};
/*
  mem
  Time O(N)
*/
var maxSubArray = function (nums) {
  const mem = {};
  // max subarry ends with pos i
  const dp = (i) => {
    if (i == 0) {
      return nums[i];
    }
    if (!mem[i]) {
      mem[i] = nums[i] + Math.max(dp(i - 1), 0);
    }
    return mem[i];
  };

  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    maxSum = Math.max(maxSum, dp(i));
  }
  return maxSum;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};
