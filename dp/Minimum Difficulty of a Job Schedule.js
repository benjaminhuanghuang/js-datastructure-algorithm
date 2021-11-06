/*
  1335. Minimum Difficulty of a Job Schedule

  https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
*/


/*
  Solution ： 分组DP
  https://www.youtube.com/watch?v=eRBpfoWujQM&ab_channel=HuaHua

  把N个数分成d组，每组的最大值的和最小

*/


/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
 var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;

    if (d > n) return -1;

    const dp = Array.from(Array(n+1), () => Array(d+1).fill(Number.MAX_SAFE_INTEGER / 2));
    
    dp[0][0]=0;

    for(let i = 1; i <=n; i++){
      for(let k =1; k <=d; ++k){
        let md = 0;
        for(let j = i -1; j >=k-1; j--){
          md = Math.max(md, jobDifficulty[j]);
          dp[i][k] = Math.min(dp[i][k], dp[j][k-1] + md);
        }
      }
    }
    return dp[n][d];
};