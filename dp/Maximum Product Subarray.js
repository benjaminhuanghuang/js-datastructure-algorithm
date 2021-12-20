/*
152. Maximum Product Subarray

https://leetcode.com/problems/maximum-product-subarray/
*/

/*
https://www.youtube.com/watch?v=gwZm6mIYDfk&list=PLLuMmzMTgVK6krji67w8tEAAud71nQQFe&index=4&ab_channel=HuaHua

*/

var maxProduct = function (nums) {
  // return [min, max] of subarray product ends with nums[i]
  const dp = (i) => {
    if (i == 0) {
      return [nums[i], nums[i]];
    }
    let [min, max] = dp(i - 1);
    if (nums[i] < 0) {
      [min, max] = [max, min];
    }
    return [Math.min(min * nums[i], nums[i]), Math.max(max * nums[i], nums[i])];
  };
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, dp(i)[1]);
  }
  return ans;
};

/*
https://www.youtube.com/watch?v=XIk4fu7wjvc

需要记录最大，最小两组
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxSoFar = nums[0],
    minSoFar = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar *= nums[i];
    minSoFar *= nums[i];
    if (nums[i] < 0) {
      const tmp = maxSoFar;
      maxSoFar = minSoFar;
      minSoFar = tmp;
    }
    maxSoFar = Math.max(maxSoFar, nums[i]);
    minSoFar = Math.min(minSoFar, nums[i]);

    res = Math.max(res, maxSoFar);
  }
  return res;
};
