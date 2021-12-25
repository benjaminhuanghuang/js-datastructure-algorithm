/*
46. Permutations

Given a collection of distinct integers, return all possible permutations.

https://leetcode.com/problems/permutations/

*/

/*
https://zxi.mytechroad.com/blog/searching/leetcode-46-permutations/
Solution: DFS
Time complexity: O(n!)
Space complexity: O(n)
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const ans=[];
  const used = new Array(nums.length).fill(0);

  const dfs = (nums, used, curr, ans) =>
  {
    if (curr.length == nums.length)
    {
      ans.push([...curr]);
      return;
    }

    for (let i = 0; i < nums.length; i++)
    {
      if (used[i])
        continue;

      curr.push(nums[i]);
      used[i] = 1;
      dfs(nums, used, curr, ans);
      curr.pop();
      used[i] = 0;
    }
  }
  dfs(nums, used, [], ans);

  return ans;
};