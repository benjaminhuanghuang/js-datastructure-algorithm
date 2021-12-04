/*

300. Longest Increasing Subsequence

Level: Medium

https://leetcode.com/problems/longest-increasing-subsequence

*/

/*
  recursion + memoization

  O(N^2)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n == 0) return 0;
  const mem = new Array(n).fill(0);
  let ans = 0;

  // length of LIS ends with nums[r]
  const LIS = (r) => {
    if (r == 0) return 1;
    if (mem[r] > 0) return mem[r];
    let ans = 1;
    for (let i = 0; i < r; ++i) {
      if (nums[r] > nums[i]) {
        ans = Math.max(ans, LIS(i) + 1);
      }
    }
    mem[r] = ans;
    return mem[r];
  };

  for (let i = 0; i < n; ++i) {
    ans = Math.max(ans, LIS(i));
  }
  return ans;
};


/*
https://www.youtube.com/watch?v=7DKFpWnaxLI&ab_channel=HuaHua

    DP
    O(N^2)
  */
    var lengthOfLIS = function (nums) 
    {
      if (nums.length === 0)
        return 0;
      let n = nums.length;
      const dp =  new Array(n).fill(1);
      for (let i = 1; i < n; ++i) // sub array 长度
        for (let j = 0; j < i; ++j) // 以j结尾
          if (nums[i] > nums[j])
            dp[i] = max(dp[i], dp[j] + 1);

      let max = 0;

      return Math.max(...dp);  
    }
