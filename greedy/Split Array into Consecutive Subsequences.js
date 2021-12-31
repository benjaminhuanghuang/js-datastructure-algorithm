/*
659. Split Array into Consecutive Subsequences

Level: Medium

https://leetcode.com/problems/split-array-into-consecutive-subsequences
*/

/*
  Solution: 
  https://www.youtube.com/watch?v=5GZ2NCtloW0&ab_channel=HuifengGuan

  扑克牌算法，必须全部弄成“顺子”。一个“顺子”至少3张连续的牌。
  每一个数字都尽量向前加一个sequence
  记录ending number

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const sequences = new Map(); // ending number -> how many sequence
  const count = new Map(); // number -> how many unchecked

  for (const n of nums) {
    if (count.has(n)) {
      count.set(n, count.get(n) + 1);
    } else {
      count.set(n, 1);
    }
  }

  for (const n of nums) {
    if (count.get(n) == 0) continue;
    if (sequences.has(n - 1) && sequences.get(n - 1) > 0) {
      // add n to existed sequence end with n -1
      sequences.set(n - 1, sequences.get(n - 1) - 1);
      if (sequences.has(n)) {
        sequences.set(n, sequences.get(n) + 1);
      } else {
        sequences.set(n, 1);
      }
      count.set(n, count.get(n) - 1);
    } else {
      // can create a new sequence
      if (!count.has(n + 1) || count.get(n + 1) == 0 || !count.has(n + 2) || count.get(n + 2) == 0) {
        return false;
      }
      count.set(n, count.get(n) - 1);
      count.set(n + 1, count.get(n + 1) - 1);
      count.set(n + 2, count.get(n + 2) - 1);
      if (sequences.has(n + 2)) {
        sequences.set(n + 2, sequences.get(n + 2) + 1);
      } else {
        sequences.set(n + 2, 1);
      }
    }
  }
  return true;
};
