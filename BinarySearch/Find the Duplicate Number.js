/*
287. Find the Duplicate Number

https://leetcode.com/problems/find-the-duplicate-number/
*/

/*
https://zxi.mytechroad.com/blog/algorithms/binary-search/leetcode-287-find-the-duplicate-number/
 //时间 O(NlogN) 空间 O(1)
    //二分查找,    1..10, 小于等于5的一定有5个,如果多于5个,就在lower part, 等于5个就是upper part.
    // Find the smallest m such that len(nums <= m) > m, which means m is the duplicate number.
   
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let l = 1;
  let r = nums.length;
  while (l < r) {
    let mid = (r - l) / 2 + l;
    let count = 0; // len(nums <= m)
    for (const num of nums) {
      if (num <= mid) ++count;
    }

    if (count <= mid) l = mid + 1;
    else r = mid;
  }
  return l;
};
