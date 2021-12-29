/*
282. Expression Add Operators

https://leetcode.com/problems/expression-add-operators/

Input: num = "232", target = 8
Output: ["2*3+2","2+3*2"]

  # 494. Target Sum

/*
  https://www.youtube.com/watch?v=v05R1OIIg08&ab_channel=HuaHua
  Time Complexity O(N^2 * 4^(N-1))   
    num长度为N， 有N-1个空，每个空可以填 + - * space

*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
 var addOperators = function(num, target) {
    const ans =[];
    /* 
      curr expr
      pos
      prev: prev number

    */
    const dfs = (expr, pos, prev, curr) =>
    {

    }
    dfs();

    return ans;
};