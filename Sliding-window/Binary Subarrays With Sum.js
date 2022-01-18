/*
930. Binary Subarrays With Sum

https://leetcode.com/problems/binary-subarrays-with-sum/

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

*/

/*
  Sliding Window
*/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let res = 0,
    sum = 0,
    left = 0,
    n = nums.length;
  for (let right = 0; right < n; ++right) {
    sum += nums[right];
    while (left < right && sum > goal) {
      //缩小window
      sum -= nums[left++];
    }
    if (sum < goal) continue;
    if (sum == goal) ++res;
    //当窗口左边有连续0的时候，因为0并不影响 sum，但是却要算作不同的子数组，所以要统计左起连续0的个数，并且加到结果 res 中即可
    for (let i = left; i < right && nums[i] == 0; ++i) {
      ++res;
    }
  }
  return res;
};

/*
Method 1 (HashTable)
Takes take a look of how HashTable help us in this subarray problem. 
If we know all the sums start from 0 to j, where j < i, we will be able to find any sum(j, i) by doing
“sum(0, i) — sum(0, j — 1) = sum(j, i)”
*/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let res = 0,
    curSum = 0;
  const map = new Map();
  for (const num of nums) {
    curSum += num;
    res += m[curSum - S];
    if (map.has(curSum)) {
      map.set(curSum, map.get(curSum) + 1);
    } else {
      map.set(curSum, 1);
    }
  }
  return res;
};
