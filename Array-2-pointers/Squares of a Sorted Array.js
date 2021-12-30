/*

  977. Squares of a Sorted Array
  
  https://leetcode.com/problems/squares-of-a-sorted-array/
*/

/*
  Brute force: 每个数平方之后，排个序 , O(N + Nlog(N))

  2 points: 
  数组其实是有序的， 只不过负数平方之后可能成为最大数了。

  那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。

  此时可以考虑双指针法了，i指向起始位置，j指向终止位置。

  定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置。

  如果A[i] * A[i] < A[j] * A[j] 那么result[k--] = A[j] * A[j]; 。

  如果A[i] * A[i] >= A[j] * A[j] 那么result[k--] = A[i] * A[i]; 。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const left_val = Math.abs(nums[left]);
    const right_val = Math.abs(nums[right]);
    if (right_val > left_val) {
      // push element to the front of the array
      res.unshift(right_val * right_val);
      right--;
    } else {
      res.unshift(left_val * left_val);
      left++;
    }
  }
  return res;
};
