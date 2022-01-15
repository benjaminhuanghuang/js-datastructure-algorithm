/*
169. Majority Element

Easy

https://leetcode.com/problems/majority-element/
*/

/*
Solution: Boyer–Moore Voting Algorithm
Time complexity: O(n)
Space complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = nums[0];
  let count = 0;

  for (const num of nums) {
    if (num == majority) {
      ++count;
    } else {
      --count;
      if (count == 0) {
        count = 1;
        majority = num;
      }
    }
  }

  return majority;
};
