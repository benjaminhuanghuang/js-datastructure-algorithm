/*
704. Binary Search

Level: Easy

https://leetcode.com/problems/binary-search
*/

/*
HuaHua Tempalate [l,r)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    // Find the first pos, nums[i] >=target;
    if (nums[m] >= target) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
