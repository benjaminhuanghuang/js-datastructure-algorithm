/*
312. Burst Balloons

Hard

https://leetcode.com/problems/burst-balloons/
*/

/*
  https://www.youtube.com/watch?v=0WU-p2Brdi8&ab_channel=HuaHua

  Time complexity:
    Subproblem:O(N^2)
    Time in each subproblem: O(N)
    T: O(N^2) * O(N) = O(N^3)

  Space complexity:
    Subproblem:O(N^2)
    Space in each subproblem: O(1)
    T: O(N^2) * O(1) = O(N^2)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    const n = nums.length;
    nums.push(1);
    nums.unshift(1);
    
    const db = (i, j) =>{
      if(i > j) return 0;
      return Math.max(dp(i, k-1)+ nums[i-1] * nums[k]* nums[j+1])
    }

    return dp(1, n)
};