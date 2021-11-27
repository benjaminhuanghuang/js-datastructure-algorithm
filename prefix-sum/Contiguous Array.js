/*
525. Contiguous Array

https://leetcode.com/problems/contiguous-array/

Given a binary array nums, return the maximum length of a contiguous subarray with an 
equal number of 0 and 1

*/

/*
  https://www.youtube.com/watch?v=uAGt1QoAoMU&ab_channel=HuaHua

  Solution 
  Covert 0 to -1, -> sum of subarray == 0
  use a map to track the first index of each prefix sum

  when prefix i == prefix j, that means sum(i+1 , j) == 0
  */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if (nums.length === 0) return 0;

  const pos = new Map();
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; ++i) {
    // prefix sum
    sum += nums[i] === 1 ? 1 : -1;
    if (sum == 0) {
      ans = i + 1;
    } else if (pos.has(sum)) {
      ans = Math.max(ans, i - pos.get(sum));
    } else {
      pos.set(sum, i);
    }
  }
  return ans;
};
