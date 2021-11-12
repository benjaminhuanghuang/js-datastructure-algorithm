/*
  220. Contains Duplicate III

  https://leetcode.com/problems/contains-duplicate-iii/

*/


/*
  Time complexity O(N*K)
  Space complexity O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length == 0 || k <= 0 || t < 0) return false;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j - i <= k && j < nums.length; ++j) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
};
