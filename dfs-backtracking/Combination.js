/*
77. Combinations

Medium

https://leetcode.com/problems/combinations/
*/
/*

  https://www.youtube.com/watch?v=q0s6m7AiM7o&ab_channel=NeetCode

    recursion tree
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  
  function dfs(start, curr)
  {
    if (k == curr.length) {
      //注意要copy
      ans.push([...curr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      curr.push(i);
      dfs(i + 1, curr);
      curr.pop();
    }
  }
  dfs(1, []); // start from 1
  return ans;
};
