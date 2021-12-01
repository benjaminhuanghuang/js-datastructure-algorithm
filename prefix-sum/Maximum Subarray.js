/*

53. Maximum Subarray

https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the "largest sum" and return its sum.
*/

/*
 prefix sum
 https://www.youtube.com/watch?v=hPWJNoaI7t8&ab_channel=BytebyByte
  https://www.youtube.com/watch?v=5WZl3MMT0Eg&ab_channel=NeetCode
 O(N)

*/
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

/*
https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-53-maximum-subarray/

DP
*/
