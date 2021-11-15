/*
213. House Robber II

https://leetcode.com/problems/house-robber-ii/

*/

/*
  Solution:
  从 0 到 n-2  或 1到n-1找出最优解
  Time complexity : O(2N)
  Space complexity : O(2N)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length == 1)
      return nums[0];

    const maxGain = (i, j)=>{
      if (j < i){
        return 0;
      }
      return Math.max(nums[j] + maxGain(i, j-2), maxGain(i, j-1))
    }

    return Math.max(maxGain(0, nums.length-2) , maxGain(1, nums.length-1));
};