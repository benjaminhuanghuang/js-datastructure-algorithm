/*
198. House Robber

https://leetcode.com/problems/house-robber/
*/

/*
  Solution:
  本质是从所有房间中选一个子集， 一共有2^N 中方法

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const maxGain =(i) =>{
        // 从0 到 i的房子里获取到最大价值
      if (i<0)
      return 0;

      return Math.max(nums[i] + maxGain(i -2), maxGain(i-1));
    }

    return maxGain(nums.length -1);
};