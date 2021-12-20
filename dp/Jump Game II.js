
/*
  45. Jump Game II

  最少跳多少步可以到达n-1

  https://leetcode.com/problems/jump-game-ii/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;

  const dp = (i) => {
    // return min step to reach n-1 from i;
    if (i >= n - 1) return 0;

    if (i + nums[i] >= n - 1) return 1; // i + the jump lengnth at i

    let minStep = n;   // 最多跳n步
    // 从位置i可以跳 1 ~ nums[i]格， 遍历i+1 to i+s 的位置，看看这些位置跳到n-1需要多少步
    for (let s = 1; s <= nums[i]; s++) {
      minStep = Math.min(minStep, dp(i+s) + 1);
    }

    return minStep;
  };

  return dp(0);
};