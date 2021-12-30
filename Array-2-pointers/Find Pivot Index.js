/*
724. Find Pivot Index

https://leetcode.com/problems/find-pivot-index/

pivot index sumLeft == sumRight
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((s, i) => s + i);
  let l = 0;
  let r = sum;
  for (let i = 0; i < nums.length; ++i) {
      r -= nums[i];
      if (l == r) return i;
      l += nums[i];
  }
  return -1;
};

/*
  Faild with case [-1,-1,-1,-1,-1,0]
*/
var pivotIndex_Wrong = function (nums) {
  if (nums.length == 0) return -1;
  let l = 0;
  let r = nums.length - 1;
  let sumL = 0,
    sumR = 0;
  while (l < r) {
    if (sumL < sumR) sumL += nums[l++];
    else sumR += nums[r--];
  }
  if (sumL == sumR) return l;
  else return -1;
};