/*
416. Partition Equal Subset Sum

https://leetcode.com/problems/partition-equal-subset-sum/

一个正整数的数组，能否把元素划分成sum相等的两组
*/

/*
0-1背包的恰好装满的问题
选择若干物品,使得物品价值和  恰好等于sum(array)/2
背包容量: sum(array)/2
重量花费cost: array[i]
物品价值: 0         本题: 也可以将"价值"设定为array[i]

恰好装满: dp[0]=0, dp[1,...V]=INT_MIN
*/


/*
https://www.youtube.com/watch?v=IsvocB5BJhw&ab_channel=NeetCode

根据decision tree 得出 O( N* sum(nums)/2)
树的高度: sum(nums)/2

是否可以找到一个subset， the sum of subset is sum of the array / 

Brute force:

*/
var canPartition = function(nums) {
  const sum = nums.reduce((s, a) =>  s + a);
  if (sum % 2 != 0)
    return false;
  const dp = new Set();
  dp.add(0)
  target == sum /2;

  for( let i =  nums.length -1; i>=0; i--){
     const nextDp =new Set();
     for(let t of dp){
       if(t + nums[i] == target) {
         return true;
       }
       nextDp.add(t+ nums[i]);
       nextDp.add(t);
     } 
     dp = nextDp;
  }
  return dp.has(target);
};


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
  const sum = nums.reduce((s, a) =>  s + a);
  if (sum % 2 != 0)
    return false;

  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;
  for (const num of nums)
  {
    for (let i = sum; i >= 0; --i)
      if (dp[i])
        dp[i + num] = 1;
    if (dp[sum / 2])
      return true;
  }
  return false;
};