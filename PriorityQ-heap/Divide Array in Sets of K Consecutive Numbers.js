/*
1296. Divide Array in Sets of K Consecutive Numbers

Level: Medium

https://leetcode.com/problems/split-array-into-consecutive-subsequences

# 659. Split Array into Consecutive Subsequences  (Gready)

*/

/*
  Solution: Gready
  注意，和# 659不同，#1296要求set中数字是连续的
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  if (nums.length % k) return false;
  const counts = new Map(); // number => count
  for (const num of nums) {
    if (counts.has(n)) {
      counts.set(n, count.get(n) + 1);
    } else {
      counts.set(n, 1);
    }
  }
  for (const [curr, count] of counts) {
    if (count > 0) {
      for (let i = 1; i < k; i++) {
        if (!counts.has(curr + 1)) {
          return false;
        }
        counts.set(curr + 1, count.get(curr + i) - n);
        if (counts.get(curr + i) < 0) {
          return false;
        }
      }
    }
  }
  return true;
};
