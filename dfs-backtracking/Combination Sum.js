/*
39. Combination Sum

https://leetcode.com/problems/combination-sum/
*/

/*
Recursion Tree
https://www.youtube.com/watch?v=yFfv03AE_vA&ab_channel=NareshGupta

https://zxi.mytechroad.com/blog/searching/leetcode-39-combination-sum/
https://www.youtube.com/watch?v=zIY2BWdsbFs&ab_channel=HuaHua


Sort!
注意可以使用重复元素
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);
  //
  const dfs = (target, pos, curr) => {
    // 终止条件
    if (target == 0) {
      ans.push([...curr]);
      return;
    }

    for (let i = pos; i < candidates.length; ++i) {
      if (candidates[i] > target) break;
      curr.push(candidates[i]);
      // 因为可以使用重复元素，所以继续从i开始， normal combination use i + 1
      dfs(target - candidates[i], i, curr);
      curr.pop();
    }
  };

  dfs(target, 0, []);
  return ans;
};
