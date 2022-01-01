/*
659. Split Array into Consecutive Subsequences

Level: Medium

https://leetcode.com/problems/split-array-into-consecutive-subsequences

# 1296. Divide Array in Sets of K Consecutive Numbers
*/

/*
  Solution: Map + priority queue

  https://www.youtube.com/watch?v=5GZ2NCtloW0&ab_channel=HuifengGuan

  扑克牌算法，必须全部弄成“顺子”。一个“顺子”至少3张连续的牌。
  每一个数字都尽量向前加一个sequence
  记录ending number
  
  这个方法的缺点在于 如果要求组成K张连续的牌，就不能工作了，
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const map = new Map(); // num=> pq

  for (const val of nums) {
    if (map.has(val - 1) && map.get(val - 1).size() > 0) {
      // minPQ size > 0
      // (num - 1) sequence exists
      const pq = map.get(val - 1);
      const len = pq.pop();
      if (map.get(val) == null) {
        map.set(val, new PriorityQueue());
      }
      map.get(val).push(len + 1);
    } else {
      // (num - 1) sequence does not exist
      if (map.get(val) == null) {
        map.set(val, new PriorityQueue());
      }
      map.get(val).push(1);
    }
  }

  // Check each non-empty priority queue
  for (const pq of map.values()) {
    while (pq.size() > 0) {
      if (pq.pop() < 3) {
        return false;
      }
    }
  }

  return true;
};
