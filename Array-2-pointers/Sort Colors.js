/*
  75. Sort Colors

  https://leetcode.com/problems/sort-colors/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length <= 1) return;

  let left = 0,
    i = 0,
    right = nums.length - 1;

  const swap = (nums, i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  while (i < nums.length) {
    if (nums[i] == 0) {
      swap(nums, i, left);
      left++;
      i++;
    } else if (nums[i] == 2 && i < right) {
      swap(nums, i, right);
      right--;
      // 注意 此时要再次判断 nums[i]的值，因此不能i++
    } else {
      i++;
    }
  }
};
