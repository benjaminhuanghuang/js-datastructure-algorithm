/*
154. Find Minimum in Rotated Sorted Array II

Hard

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

与#153 的区别： 有重复的数字
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {};

/*
  recursion

  https://www.youtube.com/watch?v=aCb1zKMimDQ&ab_channel=HuaHua
  适用于 #153
*/

var findMin = function (nums) {
  return findMinHelper(nums, 0, nums.length - 1);
};

function findMinHelper(nums, l, r) {
  // Only 1 or 2 elements
  if (l + 1 >= r) return Math.min(nums[l], nums[r]);

  // Sorted
  if (nums[l] < nums[r]) return nums[l];

  const mid = l + Math.floor((r - l) / 2);

  return Math.min(findMinHelper(nums, l, mid - 1), findMinHelper(nums, mid, r));
}
