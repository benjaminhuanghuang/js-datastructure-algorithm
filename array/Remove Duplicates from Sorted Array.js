/*
26. Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array

Return k after placing the final result in the first k slots of nums.

# 283. Move Zeroes
*/

var removeDuplicates = function (nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  let len = nums.length;
  if (len < 2) return len;

  //
  let end = 0;
  let i = 1;
  while (i < len) {
    if (nums[i] != nums[end]) {
      end++;
      nums[end] = nums[i];
    }
    i++;
  }
  return end + 1;
};

let res = removeDuplicates([1, 2]);
console.log(res);
