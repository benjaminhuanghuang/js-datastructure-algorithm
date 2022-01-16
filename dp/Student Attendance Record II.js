/*
552. Student Attendance Record II

Hard

https://leetcode.com/problems/student-attendance-record-ii
*/


/*
https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-552-student-attendance-record-ii/

*/

var checkRecord_DFS = function(n) {
  const dfs = (n, A, L) =>{    
    if (n == 0) return 1;
    const key = A * 3 + L;
    if (mem[n][key]) return mem[n][key];
    let ans = 0;
    ans += dfs(n - 1, A, 2); // 'P', reset number of Ls
    if (A > 0)
      ans += dfs(n - 1, A - 1, 2); // 'A', reset number of Ls
    if (L > 0)
      ans += dfs(n - 1, A, L - 1); // 'L'    
    return mem[n][key] = (ans % 1000000007);
  }

  const mem = Array.from(Array(n+1), () => Array(6).fill(0));
  if (n >= 100000) return 0;
  return dfs(n, 1, 2);
};
/*
  https://www.youtube.com/watch?v=zd20HrEb5dg&ab_channel=HuifengGuan
  https://github.com/wisdompeak/LeetCode/tree/master/Dynamic_Programming/552.Student-Attendance-Record-II
  
  DP
  dp[i] total number of rewardable record
  dp[i] 
*/
/**
 * @param {number} n
 * @return {number}
 */
 var checkRecord = function(n) {
    
};