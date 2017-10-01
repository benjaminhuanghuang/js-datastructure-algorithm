/*
674. Longest Continuous Increasing Subsequence
Given an unsorted array of integers, find the length of longest continuous increasing subsequence.

Ref # 53. Maximum Subarray 
*/
/*
  DP def : 
    fun[i] = LCIS till nums[i], nums[i] must be used

  if nums[i] < nums[i-1]
    fun[i] = f[i-1] + 1
  else
    fun[i] = 1

  ans: max(fun[i])

  Time complexity: O(n)
  Space complexity: O(n)   use dp[n]
                    O(1)   use one variable to record fn[i-1]
*/
function findLengthOfLCIS(nums) {
  // if (nums === undefined || nums === null || nums.length === 0)
  if (nums == null || nums.length === 0)
    return 0;
  
  let ans = 1;
  let subLength = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      subLength++;
      ans = Math.max(ans, subLength);
    } else {
      subLength = 1;
    }
  }
  return ans;
}

module.exports = findLengthOfLCIS;
