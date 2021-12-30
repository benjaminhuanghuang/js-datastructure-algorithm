/*
  75. Sort Colors

  https://leetcode.com/problems/sort-colors/
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    if(nums.length <=1)
      return;
      
    let left =0, right =nums.length-1;

    for(let i =0 ;i < nums.length ;i ++)
    {
      if (nums[i] == 0)
      {
        [nums[i],nums[left]] = [nums[left],nums[i]];
        left ++;
      }
      else if (nums[i] == 2 && i < right)
      {
        [nums[i],nums[right]] = [nums[right],nums[i]];
        right --;
        i--;
      }
    }
};