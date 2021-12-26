/*
1049. Last Stone Weight II

https://leetcode.com/problems/last-stone-weight-ii/
*/

/*
两两的取石头,碰撞后减去小的重量,最后1块石头时的"最小"重量

转化0-1背包:
背包体积: sum(array)/2
重量费用:array[i]
价值:array[i]   本题:设定最大化的目标=重量

不超过背包容量,计算石头能占据的最大"价值"  
F[0,...V] = 0
*/


/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    
};