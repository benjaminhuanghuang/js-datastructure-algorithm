/*
40. Combination Sum II 

https://leetcode.com/problems/combination-sum-ii/

与 39. Combination Sum 的区别 array中有重逢元素， 而结果中不允许重复使用元素
*/

/*
https://www.youtube.com/watch?v=RSatA4uVBDQ&ab_channel=HuaHua

Sort
remove duplicated!


Tiem O(2^N)
Space O(KN)
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a-b);
  const ans = [];

  const dfs = (target, pos, curr)=>{
    if(target == 0)
    {
      ans.push([...curr]);
      return;
    }

    for(let i = pos; i< candidates.length; i ++){
      if(candidates[i] > target) return;
      //  remove duplicated!
      if(i > pos && candidates[i] == candidates[i-1]) continue;

      curr.push(candidates[i]);
      dfs(target - candidates[i], i+1, curr);
      curr.pop(candidates[i]);
    }
  }

  dfs(target, 0, []);
  return ans;
};
