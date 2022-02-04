/*
334. Increasing Triplet Subsequence

Medium

https://leetcode.com/problems/increasing-triplet-subsequence/
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;
  for (const num of nums)
  {
    if (num > min2)
      return true;
    else if (num < min1)
    {
      min1 = num;
    }
    else if (num > min1 && num < min2)
    {
      min2 = num;
    }
  }
  return false;
};