/*
134. Gas Station

https://leetcode.com/problems/gas-station/

[FB]

*/

/*
https://www.youtube.com/watch?v=lJwbPZGo05A&ab_channel=NeetCode

 能走完整个环的前提是gas的总量要大于cost的总量，这样才会有起点的存在。
    
 假设开始设置起点start = 0, 并从这里出发，如果当前的gas值大于cost值，就可以继续前进，此时到下一个站点，
 剩余的gas加上当前的gas再减去cost，看是否大于0，若大于0，则继续前进。
 
 当到达某一站点时，若这个值小于0了，则说明从起点到这个点中间的任何一个点都不能作为起点，
 则把起点设为下一个点，继续遍历。当遍历完整个环时，当前保存的起点即为所求。

*/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  let total = 0, sum = 0, start = 0;
  for (let i = 0; i < gas.length; ++i)
  {
    total += gas[i] - cost[i];
    sum += gas[i] - cost[i];
    if (sum < 0)
    {
      start = i + 1;
      sum = 0;
    }
  }
  return (total < 0) ? -1 : start;
};