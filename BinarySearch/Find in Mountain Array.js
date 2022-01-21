/*
1095. Find in Mountain Array

Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. 
If such an index does not exist, return -1.

Hard

https://leetcode.com/problems/find-in-mountain-array/
*/

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/*
  https://zxi.mytechroad.com/blog/algorithms/binary-search/1095-find-in-mountain-array/
  
  Round 1: find the peak index i. That is the first i makes get(i) > get(i+1) 

  Round 2: if get(i) >= target [0, p) find first i makes get(i)>=target 

  Round 3: if get(i) < target [p, n-1) find first i makes get(i)<=target 
*/

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const binarySearch = (l, r, condition) => {
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (condition(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  };
  const n = mountainArr.length();

  // round 1: find peak. use n-1 to prevent OOB ,因because check function will use i + 1,
  const p = binarySearch(0, n - 1, (i) => {
    return mountainArr.get(i) > mountainArr.get(i + 1);
  });

  // round 2: find first i makes get(i)>=target
  const l = binarySearch(0, p, (i) => {
    return mountainArr.get(i) >= target;
  });
  if (mountainArr.get(l) == target) return l;

  // round 3: find first i in [p, n-1) makes get(i)<=target
  const r = binarySearch(p, n - 1, (i) => {
    return mountainArr.get(i) <= target;
  });
  if (mountainArr.get(r) == target) return r;

  return -1;
};
