/*
1838. Frequency of the Most Frequent Element

https://leetcode.com/problems/frequency-of-the-most-frequent-element/
*/

/*
  Solution: Sliding Window 

  https://zxi.mytechroad.com/blog/sliding-window/leetcode-1838-frequency-of-the-most-frequent-element/

  1. target number 一定存在nums中
  2. 只能increase number, 考虑 给定一个 target number 找到尽可能多的比 target 小的 number
  3. maintain a window [i~j] it takes <= K steps to make all elements equals to nums[j]

  Time Complexity O(NlogN) + O(N)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let sum = 0; // sum of the nums in the sliding window
  let ans = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    // 收缩左边界
    while (l < r && sum + k < nums[r] * (r - l + 1)) {
      sum -= nums[l];
      l++;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
