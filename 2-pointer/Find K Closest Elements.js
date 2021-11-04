/*
658. Find K Closest Elements

https://leetcode.com/problems/find-k-closest-elements/
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let low = 0;
  let high = arr.length - 1;
  while (high - low >= k) {
    if (Math.abs(arr[low] - x) > Math.abs(arr[high] - x)) {
      low++;
    } else {
      high--;
    }
  }
  return arr.slice(low, hith + 1);
};
