/*
  55. Jump Game

  https://leetcode.com/problems/jump-game/
*/

/*
  递归求解，设计一个函数，可以从某个位置 i 跳到最后

  Time O(N)

  Need memorization
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
  const n = nums.length;

  const dp = (i) => {
    // return whether we can reach n-1 from i;
    if (i >= n - 1) return true;

    if (i + nums[i] >= n - 1) return true; // i + the jump lengnth at i

    for (let s = 1; s <= nums[i]; s++) {
      if (dp(s + i)) return true;
    }

    return false;
  };

  return dp(0);
};