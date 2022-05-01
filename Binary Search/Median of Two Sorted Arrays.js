/*
4. Median of Two Sorted Arrays [Hard]

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


What is median:
   is the middle number in a sorted, ascending or descending

https://leetcode.com/problems/median-of-two-sorted-arrays/
*/

/*
  Easy solution: 
  is Merging two arrays then find median, the time complexity of merge two arrays is O(M+N)
  The time complexity will be O(N+M)


  https://zxi.mytechroad.com/blog/algorithms/binary-search/leetcode-4-median-of-two-sorted-arrays/

  Binary Search

  nums1中取前m1个elements， nums2中取前m2个elements
  m1 + m2 = k = (n1 + n2 +1) /2
  
  搜索 m1
  
  Time complexity: O(log(min(n1,n2)))

  Space complexity: O(1)  
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

/*
  https://www.youtube.com/watch?v=q6IEA26hvXc&ab_channel=NeetCode

  odd case / 
  根据元素总个数，可以知道最终left half, right half各有多少元素
  1. 对一个array 二分，根据二分后left part 的长度和最终 left half的长度，可求出另一array中left part 的最后一个元素和right part的第一个元素
     如果 每组的last of left < first of right，就找到了答案
  3. 先指定一个array, l=0, r=length, 用 (l+r)/2 来划分left partition， right partition， 那么在另一array中，right partition要比这个值大
     如果不对，就调整这个array的l,r 边界

  4. max(两个左partition) + min(两个右partition)


  Time O(log(min(N,M))
*/

var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  // step 1. 找出 shorter one A
  let A = nums1;
  let B = nums2;
  if (A.length > B.length) {
    A = nums2;
    B = nums1;
  }

  // step 2. run binary search on the shorter array
  let l = 0;
  let r = A.length - 1;

  while (true) {
    let mid = Math.floor((r - l) / 2) + l; // for A
    let midB = half - mid - 2; // the middle index for B

    // check out of bounds
    const leftA = mid >= 0 ? A[mid] : Number.MIN_SAFE_INTEGER;
    const rightA = mid + 1 < A.length ? A[mid + 1] : Number.MAX_SAFE_INTEGER;

    const leftB = midB >= 0 ? B[midB] : Number.MIN_SAFE_INTEGER;
    const rightB = midB + 1 < B.length ? B[midB + 1] : Number.MAX_SAFE_INTEGER;

    if (leftA <= rightB && leftB <= rightA) {
      // find it
      if (total % 2) {
        // odd
        return Math.min(rightA, rightB);
      } else {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      }
    } else if (leftA > rightB) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};
