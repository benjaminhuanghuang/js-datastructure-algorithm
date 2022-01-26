/*
256. Paint House

n个房子在一列直线上，给房屋染色，分别有红色蓝色和绿色。
每个房屋染不同的颜色费用不同，设计一种染色方案使得相邻的房屋颜色不同，并且费用最小，返回最小的费用。

输入: [[14,2,11],[11,14,5],[14,3,10]]
输出: 10

https://leetcode.com/problems/paint-house/
https://www.lintcode.com/problem/paint-house/note/211786
*/

/*
https://www.youtube.com/watch?v=-w67-4tnH5U&ab_channel=NeetCode

Brute force  Time = 3 * 2 * 2 ... = O(2^N) n is the count of houses

DP: Time O(N)
*/

function minCost(costs) {
  const dp = [0,0,0];  // 对应使用 color i的最小费用
  for([c1, c2, c3] of costs){
    const dp0 = c1 + Math.min(dp[1], dp[2]);
    const dp1 = c2 + Math.min(dp[0], dp[2]);
    const dp2 = c3 + Math.min(dp[0], dp[1]);
    dp = [dp0, dp1, dp2];
  }
  return Math.min(...dp);
}
