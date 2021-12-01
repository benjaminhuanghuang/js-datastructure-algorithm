/*

34. Find First and Last Position of Element in Sorted Array

https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length < 1) return [];

  let left = 0;
  let right = nums.length - 1;
  const result = [-1, -1];
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    // mid == target, expand the range
    else {
      result[0] = mid;
      result[1] = mid;
      let i = mid - 1;
      while (i >= 0 && nums[i] == target) {
        result[0] = i;
        i--;
      }
      i = mid + 1;
      while (i < nums.length && nums[i] == target) {
        result[1] = i;
        i++;
      }
      break; // DO NOT Forget
    }
  }
  return result;
};
