/*
  55. Jump Game

  Medium

  https://leetcode.com/problems/jump-game/

  [Amazon]
*/

/*
  https://www.youtube.com/watch?v=3mIc_mKP4yM&list=PLLuMmzMTgVK7vEbeHBDD42pqqG36jhuOr&index=6&ab_channel=HuaHua

  递归求解，设计一个函数，判断能否从某个位置 i 跳到 n-1

  Time O(N)

  Recursion + memorization
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;

  // return whether we can reach n-1 from i;
  const dp = (i) => {
    if (i >= n - 1) return true;

    // i + the jump lengnth >= n-1 means we can reach n - 1 from i
    if (i + nums[i] >= n - 1) return true;

    // Can we reach n-1 from i+1, i+2...i+nums[i]
    for (let s = 1; s <= nums[i]; s++) {
      if (dp(i + s)) return true;
    }

    return false;
  };

  return dp(0);
};
