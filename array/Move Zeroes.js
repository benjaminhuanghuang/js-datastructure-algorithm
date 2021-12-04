/*
283. Move Zeroes

Level: Easy

https://leetcode.com/problems/move-zeroes
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let last = 0;
  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] != 0)
    {
      nums[last] = nums[i];
      last++;
    }
  }
  while (last < nums.length)
  {
    nums[last++] = 0;
  }
};