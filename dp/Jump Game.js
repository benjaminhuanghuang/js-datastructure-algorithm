/*
  55. Jump Game

  Medium

  https://leetcode.com/problems/jump-game/

  [Amazon]
*/

/*
  递归求解，设计一个函数，判断能否从某个位置 i 跳到 n-1

  Time O(N)

  Need memorization
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

    if (i + nums[i] >= n - 1) return true; // i + the jump lengnth at i can reach n - 1

    // 从 位置 i 跳 1 ... nums[i] 能否到达 n-1
    for (let s = 1; s <= nums[i]; s++) {
      if (dp(s + i)) return true;
    }

    return false;
  };

  return dp(0);
};