/*
152. Maximum Product Subarray

https://leetcode.com/problems/maximum-product-subarray/
*/


/*
https://www.youtube.com/watch?v=XIk4fu7wjvc

需要记录最大，最小两组
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let maxSoFar = nums[0], minSoFar = nums[0];
    let res = nums[0];

    for(let i =1;i < nums.length; i++){
      maxSoFar *= nums[i];
      minSoFar *= nums[i];
      if(nums[i] < 0) {
        const tmp = maxSoFar;
        maxSoFar = minSoFar;
        minSoFar=tmp;
      }
      maxSoFar = Math.max(maxSoFar, nums[i]);
      minSoFar = Math.min(minSoFar, nums[i]);

      res = Math.max(res, maxSoFar);
    }
    return res;

};