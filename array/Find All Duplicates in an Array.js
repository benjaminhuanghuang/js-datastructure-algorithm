/*

422. Find All Duplicates in an Array

Medium

https://leetcode.com/problems/find-all-duplicates-in-an-array/

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and 
each integer appears once or twice, return an array of all the integers that appears twice.
You must write an algorithm that runs in O(n) time and uses only constant extra space.
*/


/*
对于每个nums[i]，将其对应的nums[nums[i] - 1]取相反数，如果其已经是负数了，说明之前存在过，将其加入结果res中
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length; ++i) {
      const idx = Math.abs(nums[i]) - 1;
      if (nums[idx] < 0) 
        res.push(idx + 1);
      nums[idx] = -nums[idx];
  }
  return res;
};