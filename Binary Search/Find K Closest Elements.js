/*
658. Find K Closest Elements

Medium

https://leetcode.com/problems/find-k-closest-elements/

return the k closest integers to x in the array.
*/

/*
  Binary Search 
  每次比较的是 mid 和x的距离 与 mid+k 跟x的距离，以这两者的大小关系来确定二分法折半的方向
*/
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    // mid to mid+k 区间应该向右移动
    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return arr.slice(l, l + k);
};

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
  return arr.slice(low, high + 1);
};
