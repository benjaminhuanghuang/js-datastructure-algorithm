/*
525. Contiguous Array

https://leetcode.com/problems/contiguous-array/

Given a binary array nums, return the maximum length of a contiguous subarray with an 
equal number of 0 and 1

*/

/*
  https://www.youtube.com/watch?v=uAGt1QoAoMU&ab_channel=HuaHua

  Brute Force:
    Time complexity: O(N^3)
    
  Solution: HashTable + prefix sum
  1. Covert 0 to -1, -> sum of subarray == 0
  2.  use a map to track 每个 prefix sum (sum of element 0 to element i) 第一次出现的index
   
  when prefix i == prefix j, that means sum(i+1 , j) == 0, ans = max(ans, j-i)
  
   Time complexity: O(N)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if (nums.length === 0) return 0;

  const prefixPos = new Map(); // prefix->index
  let prefixSum = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; ++i) {
    // prefix sum
    prefixSum += nums[i] === 1 ? 1 : -1;
    if (prefixSum == 0) {
      maxLen = i + 1;
    } else {
      if (prefixPos.has(sum)) {
        maxLen = Math.max(maxLen, i - prefixPos.get(prefixSum));
      } else {
        pos.set(prefixSum, i);
      }
    }
  }
  return maxLen;
};
