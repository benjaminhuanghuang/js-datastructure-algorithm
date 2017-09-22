var rob = function(nums) {
  if (nums == null || nums.length == 0) return 0;
  let n = nums.length;
  let dp = Array(n + 2).fill(0);

  for (let i = 2; i < n + 2; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i-2], dp[i - 1]);
  }

  return dp[n + 1];
};
