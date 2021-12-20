
/*

918. Maximum Sum Circular Subarray

https://leetcode.com/problems/maximum-sum-circular-subarray/
*/

/*
https://www.youtube.com/watch?v=Gk6yWhfzdOc&list=PLLuMmzMTgVK6krji67w8tEAAud71nQQFe&index=3&ab_channel=HuaHua

问题转化成
max(prefix + suffix) = max(sum - mid) = sum + maxSubarray(-arr)
如果所有element都是负数， ans = maxSubarray(arr)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    // max subarry ends with pos i
  const dp = (i, sign) => {
    if (i == 0) {
      return nums[i] * sign;
    }
    return nums[i] * sign + Math.max(dp(i - 1, sign), 0); // when dp(i-1) < 0, only use nums[i]
  };
  let maxSum_positive = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    maxSum_positive = Math.max(maxSum_positive, dp(i,1));
  }

  let maxSum_negative = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    maxSum_negative = Math.max(maxSum_negative, dp(i,-1));
  }

  if (maxSum_positive < 0){
    // 全是负数
    return maxSum_positive
  }

  return Math.max(maxSum_positive, nums.reduce((sum, i) => sum+i, 0) + maxSum_negative);
};