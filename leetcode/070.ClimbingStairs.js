var climbStairs = function(n) {
  if (n < 1) return 0;

  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var climbStairs = function(n) {
  if (n < 1) return 0;

  if (n == 1) return 1;
  if (n == 2) return 2;
  let step1 = 1;
  let step2 = 1;
  let ans;
  for (let i = 3; i <= n; i++) {
    ans = step2 + step1;
    step1 = step2;
    step2 = ans;
  }
  return ans;
};
