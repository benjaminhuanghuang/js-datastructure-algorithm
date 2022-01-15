/*
80. Remove Duplicates from Sorted Array II

https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

1. each unique element appears at most twice.
2. Return k after placing the final result in the first k slots of nums
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 2) return len;

  let last = 1;

  for (let i = 2; i < len; i++) {
    if (nums[i] != nums[last - 1]) {
      last++;
      nums[last] = nums[i];
    }
  }
  return last + 1;
};

var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 2) return len;

  let last = 2;

  for (let i = 2; i < len; i++) {
    if (nums[i] != nums[last - 2]) {
      nums[last] = nums[i];
      last++;
    }
  }
  return last;
};
