/*
33. Search in Rotated Sorted Array

Medium

https://leetcode.com/problems/search-in-rotated-sorted-array/
*/

/*
    mid 处于左边的上升区间 还是 右边的的上升区间？
    start <= target < mid 选择左侧区间，否则选择右区间
    mid < target <= end 选择右侧区间，否则选择左区间
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    if (nums.length == 0)
      return -1;

    let l = 0;
    let r = nums.length - 1;

    while (l <= r)
    {
      let mid = l + (r - l) / 2;
      if (nums[mid] == target)
      {
        return mid;
      }
      if (nums[l] <= nums[mid]) // mid located in left part, which is increasing
      {
        if (nums[l] <= target && target < nums[mid]) //  target located between left and mid
          r = mid - 1;
        else //  target is bigger than mid
          l = mid + 1;
      }
      else // nums[l] > nums[mid] , mid located in right part, which is increasing
      {
        if (nums[mid] < target && target <= nums[r]) //target located between mid and right
          l = mid + 1;
        else // target is less than mid
          r = mid - 1;
      }
    }
    return -1;
};
