/*
852. Peak Index in a Mountain Array

Easy 
https://leetcode.com/problems/peak-index-in-a-mountain-array/

#162. Find Peak Element
*/

/*------------------------------------------------------------
Solution1: Liner Scan

Time complexity: O(n)
Space complexity: O(1)
------------------------------------------------------------*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < arr[i - 1]) return i - 1;
  }
  return -1;
};

/*------------------------------------------------------------
Solution 2: Binary Search

Mountain Array means sorted in a range

Find the smallest l such that A[l] > A[l + 1].

Time complexity: O(logn)
Space complexity: O(1)
------------------------------------------------------------*/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] > arr[m + 1]) r = m;
    else l = m + 1;
  }
  return l;
};
