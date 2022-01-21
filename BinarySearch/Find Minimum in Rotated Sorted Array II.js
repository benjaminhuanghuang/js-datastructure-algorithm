/*
154. Find Minimum in Rotated Sorted Array II

Hard

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

与#153 的区别： 有重复的数字
*/
/*
https://www.youtube.com/watch?v=JxoTDj-7tmo&ab_channel=HuifengGuan
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
    if (nums[m] < nums[r]) {
      r = m;
    } else if(nums[m] > nums[r]){
      l = m + 1;
    }else {
      // nums[m] == nums[r] 去掉重复的数字
      r--;
    }
  }
  return nums[l];
};

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
