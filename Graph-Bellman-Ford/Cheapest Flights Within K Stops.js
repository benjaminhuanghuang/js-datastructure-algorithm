/*
787. Cheapest Flights Within K Stops

https://leetcode.com/problems/cheapest-flights-within-k-stops/

求 the cheapest price from src to dst with at most k stops
*/

/*
  https://www.youtube.com/watch?v=5eIK3zUdYmE&ab_channel=NeetCode

  有些path 停留次数少， 但是花钱多
  这里不能使用 Dijkstra's algorithm， 

  BFS
  Time complexity  O(E*K)

*/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // the prices from src to prices[i]
  let prices = new Array(n).fill(Number.MAX_VALUE);
  prices[src] = 0;

  // BFS
  for (let i = 0; i <= k; i++) {
    const tempPrics = [...prices];
    for (const [s, d, p] of flights) {
      if (prices[s] == Number.MAX_VALUE) continue;
      // find a cheeper way to d
      if (prices[s] + p < tempPrics[d]) {
        tempPrics[d] = prices[s] + p;
      }
    }
    prices = tempPrics;
  }

  if (prices[dst] == Number.MAX_VALUE) return -1;
  return prices[dst];
};
