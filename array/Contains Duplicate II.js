/*
  Contains Duplicate II

  https://leetcode.com/problems/contains-duplicate-ii/
*/

/*
Bruteforce
  
  Time complexity O(N*K)
  Space complexity O(1)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length === 0) return false;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j - i <= k && j < nums.length; ++j) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};

/*
  hash map  value:index
  Time complexity O(N)
  Space complexity O(N)
*/

var containsNearbyDuplicate = function (nums, k) {
  if (nums.length === 0) return false;
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }

    map.set(nums[i], i);
  }
  return false;
};
