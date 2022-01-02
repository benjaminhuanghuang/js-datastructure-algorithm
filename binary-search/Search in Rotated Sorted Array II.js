/*
81. Search in Rotated Sorted Array II

https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

#33. Search in Rotated Sorted Array
  相比 #33，有重复数字
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
  if (nums.length == 0)
  return false;

let l = 0;
let r = nums.length - 1;

while (l <= r)
{
  let mid = l + Math.floor((r - l) / 2);
  if (nums[mid] == target)
  {
    return true;
  }

  if (nums[l] < nums[mid]) // mid located in left part, which is increasing
  {
    if (nums[l] <= target && target < nums[mid]) //  target located between left and mid
      r = mid - 1;
    else //  target is bigger than mid
      l = mid + 1;
  }
  else if (nums[l] > nums[mid]) // mid located in right part, which is increasing
  {
    if (nums[mid] < target && target <= nums[r]) //target located between mid and right
      l = mid + 1;
    else // target is less than mid
      r = mid - 1;
  }
  else
  {
    l++;
  }
}
return false;
};