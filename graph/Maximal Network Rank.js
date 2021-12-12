/*
1615. Maximal Network Rank

https://leetcode.com/problems/maximal-network-rank/

The network rankof two different cities is defined as the total number of directly connected 
roads to either city. If a road is directly connected to both cities, it is only counted once.

The maximal network rank of the infrastructure is the maximum network rank of all pairs of 
different cities.
*/

/*
Solution: Counting degrees and all pairs
Counting degrees for each node, if a and b are not connected, ans = degrees(a) + degrees(b), otherwise ans -= 1

Time complexity: O(E + V^2)
Space complexity: O(E)

*/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  // 1. find all degree
  const degrees = new Array(n).fill(0);
  // 2. 2D matrix
  const connect = Array.from(Array(n), () => Array(n).fill(0)); 

  for (const road of roads) {
    ++degrees[road[0]];
    ++degrees[road[1]];

    connect[road[0]][road[1]] =1;
    connect[road[1]][road[0]] =1;
  }
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      ans = Math.max(ans, degrees[i] + degrees[j] - connect[i][j]);
    }
  }
  return ans;
};
