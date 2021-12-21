/*
1567. Maximum Length of Subarray With Positive Product

Level: Medium

https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product
*/

/*
https://www.youtube.com/watch?v=gwZm6mIYDfk&list=PLLuMmzMTgVK6krji67w8tEAAud71nQQFe&index=4&ab_channel=HuaHua
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  // return [len of positive, len of negative] product of subarray product ends with nums[i]
  const dp = (i) => {
    if (i < 0 || nums[i] == 0) {
      return [0, 0];
    }
    let [p, n] = dp(i - 1);
    if (nums[i] > 0) {
      return [p + 1, n ? n + 1 : 0];
    } else {
      return [n ? n + 1 : 0, p + 1];
    }
  };
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, dp(i)[0]);
  }
  return ans;
};
