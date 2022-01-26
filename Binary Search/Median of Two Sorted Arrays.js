/*
4. Median of Two Sorted Arrays [Hard]

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

The median is the middle number in a sorted, ascending or descending


https://leetcode.com/problems/median-of-two-sorted-arrays/
*/

/*
  https://zxi.mytechroad.com/blog/algorithms/binary-search/leetcode-4-median-of-two-sorted-arrays/

  Binary Search

  nums1中取前m1个elements， nums2中取前m2个elements
  m1 + m2 = k = (n1 + n2 +1) /2
  
  搜索 m1
  
  Time complexity: O(log(min(n1,n2)))

  Space complexity: O(1)

  https://www.youtube.com/watch?v=q6IEA26hvXc&ab_channel=NeetCode

  
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  // Make sure n1 <= n2
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

  const k = Math.floor((n1 + n2 + 1) / 2);

  let l = 0;
  let r = n1;

  while (l < r) {
    const m1 = l + Math.floor((r - l) / 2);
    const m2 = k - m1;
    if (nums1[m1] < nums2[m2 - 1]) l = m1 + 1;
    else r = m1;
  }

  const m1 = l;
  const m2 = k - l;

  const c1 = Math.max(
    m1 <= 0 ? Number.MIN_SAFE_INTEGER : nums1[m1 - 1],
    m2 <= 0 ? Number.MIN_SAFE_INTEGER : nums2[m2 - 1]
  );

  if ((n1 + n2) % 2 == 1) return c1;

  const c2 = Math.min(m1 >= n1 ? Number.MAX_SAFE_INTEGER : nums1[m1], m2 >= n2 ? Number.MAX_SAFE_INTEGER : nums2[m2]);

  return (c1 + c2) / 2.0;
};
