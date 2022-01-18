/*
209. Minimum Size Subarray Sum

https://leetcode.com/problems/minimum-size-subarray-sum/

找出sum >= taget 的最小长度 sub array

*/

/*

  不断调节子序列的起始位置。从而将O(n^2)的暴力解法降为O(n)。

  https://www.youtube.com/watch?v=Hh5sEl4Z_iU
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;   // sum of the sliding window
  let ans = Number.MAX_SAFE_INTEGER;
  while (left < nums.length)
  {
    while (sum < target && right < nums.length){
      sum += nums[right];
      right ++;
    }
    if (sum < target)  // right >= nums.length
      break;
    ans = Math.min(ans, right - left);
    sum -= nums[left++];
  }
  return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};