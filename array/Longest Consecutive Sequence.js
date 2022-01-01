/*
128. Longest Consecutive Sequence

https://leetcode.com/problems/longest-consecutive-sequence/

[Google]

!! You must write an algorithm that runs in O(n) time.
*/

/*
https://www.youtube.com/watch?v=P6RZZMu_maU&ab_channel=NeetCode

1. how to find the start of a consecutive sequence? it does not have left neighbour
2. try to expend the sequence
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const n of nums) {
    if (!numSet.has(n - 1)) {
      let len = 0;
      while (numSet.has(n + len)) {
        len++;
      }
      longest = Math.max(len, longest);
    }
  }
  return longest;
};
