/*

746. Min Cost Climbing Stairs

https://leetcode.com/problems/min-cost-climbing-stairs/
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const mem = new Map();
  const climb = (n) => {
    if (mem.has(n)) return mem.get(n);
    if (n <= 1) {
      mem.set(n, 0);
      return 0;
    }
    const way = Math.min(climb(n - 1) + cost[n - 1], climb(n - 2) + cost[n - 2]);
    mem.set(n, way);
    return way;
  };

  return climb(cost.length);
};
