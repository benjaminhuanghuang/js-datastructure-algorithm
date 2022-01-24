/*
216. Combination Sum III

https://leetcode.com/problems/combination-sum-iii/
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];
  const dfs = (target, start, curr) => {
    if (target ==0 && curr.length == k) {
      ans.push([...curr]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      curr.push(i);
      dfs(target- i, i + 1, curr);
      curr.pop();
    }
  };
  dfs(n, 1, []);
  return ans;
};
