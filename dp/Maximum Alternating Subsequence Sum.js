/*

1911. Maximum Alternating Subsequence Sum

https://leetcode.com/problems/maximum-alternating-subsequence-sum/

[Google]

*/

/*
https://www.youtube.com/watch?v=4v42XOuU1XA&ab_channel=NeetCode

Decison tree  Time Complexity O(2^N)
Cache the solution by i and even/odd


*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const dp = new Map();

  //
  const dfs = (i, even) => {
    if (i == nums.length) {
      return 0;
    }
    const memKey = i + "," + even;
    if (dp.has(memKey)) {
      return dp.get(memKey);
    }

    const total = even ? nums[i] : -nums[i];
    const maxSum = Math.max(total + dfs(i + 1, !even), dfs(i + 1, even));
    dp.set(memKey, maxSum);
    return maxSum;
  };

  return dfs(0, true);
};
