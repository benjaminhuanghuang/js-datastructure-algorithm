/*
494. Target Sum

*/

/*
http://blog.csdn.net/mine_song/article/details/70216562

从给定序列中找两个子集 P 和 N，使得 sum(P) - sum(N) = S
sum(P) + sum(N) + sum(P) - sum(N) = S + sum(P) + sum(N)
2 * sum(P) = S + sum(nums)
sum(P) = (S + sum(nums)) / 2
只需要找到一个集合 P，使得 sum(P) 等于 target (S + sum(nums)) / 2 即可

举例说明：给定集合nums={1,2,3,4,5}, 求解子集，使子集中元素之和等于9 = new_target = sum(P) = (target+sum(nums))/2
定义dp[10]数组, dp[10] = {1,0,0,0,0,0,0,0,0,0}

dp[i]表示子集合元素之和等于当前目标值的方案个数, 当前目标值等于9减去当前元素值

当前元素等于1时，dp[9] = dp[9] + dp[9-1]

  dp[8] = dp[8] + dp[8-1]

  ...

  dp[1] = dp[1] + dp[1-1]
*/
var findTargetSumWays_dp = function(nums, S) {
  let sum = nums.reduce(function(a, b) {
    return a + b;
  }, 0);
  if (sum < S || ((S + sum) & 0x1) == 1) {
    return 0;
  }

  let target = (S + sum) >> 1;
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (num of nums) {
    for (let i = target; i >= num; --i) {
      dp[i] += dp[i - num];
    }
  }
  return dp[target];
};


var findTargetSumWays = function(nums, S) {
  let res = 0;

  dfs = (index, nums, s) => {
    if (index == nums.length) {
      // not nums.length1-1
      if (s == 0) res++;
      return;
    }

    dfs(index + 1, nums, s + nums[index]);
    dfs(index + 1, nums, s - nums[index]);
  };

  dfs(0, nums, S);

  return res;
};

let res = findTargetSumWays_dp([1, 1, 1, 1, 1], 3);
console.log(res);
