/*
53. Maximum Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest 
sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.


[?] If you have figured out the O(n) solution, try coding another solution using the divide and 
conquer approach, which is more subtle.


Ref # 674. Longest Continuous Increasing Subsequence
*/

/*
  DP def :
    f[i] = maxSubArray() 
    if f[i-1]>0
      f[i] = f[i-1] + nums[i]
    else
      f[i] = nums[i]
  
  Sample:
    nums : [-2,1,-3,4,-1,2,1,-5,4]
    f    : [-2,1,-2,4, 3,5,6, 1,5]

  Time complexity: O(n)
  Space complexity: O(n)   
*/

function maxSubArray(nums) {
  if (nums == null || nums.length == 0) return 0;
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
  }
  return Math.max(...dp);
}

module.exports = maxSubArray;
