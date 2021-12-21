/*

1014. Best Sightseeing Pair

https://leetcode.com/problems/best-sightseeing-pair/

*/

/*
  找pair
  score = values[i] + values[j] + i -j = (values[i] + i) + (values[j] -j)

*/
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  /*
    return s
    1. max score of subarray values [0...j]
    2. max of values[i] + i, 为了使(values[i] + i) + (values[j] -j)最大，values[i] + i 就要最大
  */
  const dp = (i) => {
    if (i < 0) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    let [score, value] = dp(i - 1);
    // 跳过values[j] 或使用 values[j]
    return [Math.max(score, value + values[i] - i), Math.max(value, values[i] + i)];
  };

  return dp(values.length - 1)[0];
};
