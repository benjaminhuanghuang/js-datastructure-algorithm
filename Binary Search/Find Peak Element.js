/*
162. Find Peak Element

Medium

https://leetcode.com/problems/find-peak-element/

# 852. Peak Index in a Mountain Array
# 1095. Find in Mountain Array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  HuaHua template
*/
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1; // preventing OOB ,因为会用到nums[m + 1]
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    // Find the first pos, num[m] > num[m + 1]
    if (nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};

/*
  works. 
*/
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    // 如果[mid-1]>[mid]，那么peak肯定在[low]和[mid-1]之间（闭区间）
    if (nums[m] < nums[m - 1]) {
      r = m;
    }
    // 如果mid+1大，那么peak肯定在mid+1和hi之间（闭区间）
    else if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return l;
};
