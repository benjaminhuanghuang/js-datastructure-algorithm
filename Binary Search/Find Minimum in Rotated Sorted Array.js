/*
153. Find Minimum in Rotated Sorted Array

Medium

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
*/
/*
 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1; // 要减1，因为用到了nums[r]

  while (l < r) {
    let m = Math.floor((r - l) / 2) + l;
    // find the first element at right part, in the right part nums[i] < nums[r]
    if (nums[m] <= nums[r]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return nums[l];
};

/*
  recursion

  https://zxi.mytechroad.com/blog/leetcode/leetcode-153-find-minimum-in-rotated-sorted-array/
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
