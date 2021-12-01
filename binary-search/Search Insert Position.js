/*
35. Search Insert Position
https://leetcode.com/problems/search-insert-position/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
