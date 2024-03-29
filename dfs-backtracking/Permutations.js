/*
46. Permutations

Given a collection of distinct integers, return all possible permutations.

https://leetcode.com/problems/permutations/

*/

/*
https://www.youtube.com/watch?v=s7AvT7cGdSo&ab_channel=NeetCode

https://zxi.mytechroad.com/blog/searching/leetcode-46-permutations/

Solution: DFS
Time complexity: O(n!)
Space complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const used = new Array(nums.length).fill(0);

  const dfs = (curr, used) => {
    if (curr.length == nums.length) {
      ans.push([...curr]);
      return;
    }

    // 注意每次都是从 i =0 开始取
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      curr.push(nums[i]);
      used[i] = 1;
      dfs(curr);
      // backtracking
      curr.pop();
      used[i] = 0;
    }
  };
  dfs([], used);

  return ans;
};
