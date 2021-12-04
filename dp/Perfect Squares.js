/*
279. Perfect Squares

https://leetcode.com/problems/perfect-squares/
*/

/*
https://www.youtube.com/watch?v=HLZLwjzIVGo

decision tree

Can't be greedy

  dp[i] 表示正整数i能少能由多个完全平方数组成，最差情况i可以由i个i组成
  dp[i] := ans
  dp[0] = 0
  dp[i] = min{dp[i – j * j] + 1} 1 <= j * j <= i

  dp[5] = min{
  dp[5 – 2 * 2] + 1 = dp[1] + 1 = (dp[1 – 1 * 1] + 1) + 1 = dp[0] + 1 + 1 = 2,
  dp[5 – 1 * 1] + 1 = dp[3] + 1 = (dp[3 – 1 * 1] + 1) + 1 = dp[1] + 2 = dp[1 – 1*1] + 1 + 2 = dp[0] + 3 = 3
  };

  dp[5] = 2

  Time complexity: O(n * sqrt(n))
  Space complexity: O(n)
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // the worst case, n 可以由 1 + 1 + 1... 组成
  const dp = new Array(n + 1).fill(n);
  dp[0] = 0;
  for (let target = 1; target <= n; ++target) {
    for (let j = 1; j * j <= target; ++j) {
      // j为target之前的完全平方数
      const square = j * j;
      if (target - square < 0) break;
      dp[target] = Math.min(dp[target], dp[target - square] + 1);
      // +1 是因为target被拆成 target-square 和 square，而square是完全平方数
    }
  }
  return dp[n];
};
