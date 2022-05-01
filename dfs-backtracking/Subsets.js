/*
78 Subsets 

array nums of unique elements,

https://leetcode.com/problems/subsets/
*/

/*
https://zxi.mytechroad.com/blog/searching/leetcode-78-subsets/ [一定要看]

Time complexity: O(2^n)
Space complexity: O(n)

第一层loop: length 0 to nums.length

helper funciton(length, start pos): 终止条件

对于javascipt， python 要注意copy，
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function (nums) {
  const res = [];
  const dfs = (length, start, curr) => {
    if (curr.length == length) {
      // 注意copy
      res.push([...curr]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      dfs(length, i + 1, curr);  // NOT start + 1, solution set must not contain duplicate
      curr.pop();
    }
  };

  // 根据长度取 subset
  for (let len = 0; len <= nums.length; len++) {
    dfs(len, 0, []);
  }
  return res;
};

