/*
312. Burst Balloons

Hard

https://leetcode.com/problems/burst-balloons/

Return the maximum coins you can collect by bursting the balloons wisely.
*/

/*
  https://www.youtube.com/watch?v=VFskby7lUbw&ab_channel=NeetCode

  假设最后一个气球是 i
  nums[L-1]*1*nums[R+1] + DP[i+1][R] + DP[L][i-1] 

*/
var maxCoins = function (nums) {
  const n = nums.length;
  nums.push(1);
  nums.unshift(1);

  const dp = new Map();

  const dfs = (l, r) => {
    if (l > r) return 0;
    if (l == r) return nums[l - 1] * nums[l] * nums[l + 1];
    const key = l + "," + r;
    if (dp.has(key)) {
      return dp.get(key);
    }
    dp.set(key, 0);
    for (let i = l; i <= r; i++) {
      let coins = nums[l - 1] * nums[i] * nums[r + 1];
      coins += dfs(l, i - 1) + dfs(i + 1, r);
      dp.set(key, Math.max(dp.get(key), coins));
    }
    return dp.get(key);
  };

  return dfs(1, n);
};

/*
  https://www.youtube.com/watch?v=0WU-p2Brdi8&ab_channel=HuaHua

  Time complexity:
    Subproblem:O(N^2)
    Time in each subproblem: O(N)
    T: O(N^2) * O(N) = O(N^3)

  Space complexity:
    Subproblem:O(N^2)
    Space in each subproblem: O(1)
    T: O(N^2) * O(1) = O(N^2)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  nums.push(1);
  nums.unshift(1);

  const db = (i, j) => {
    if (i > j) return 0;
    return Math.max(dp(i, k - 1) + nums[i - 1] * nums[k] * nums[j + 1]);
  };

  return dp(1, n);
};
