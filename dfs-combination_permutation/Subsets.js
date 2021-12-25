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
  const helper = (length, start, curr) => {
    if (curr.length == length) {
      res.push([...curr]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      helper(length, i + 1, curr);  // NOT start + 1
      curr.pop();
    }
  };

  // 根据长度取 subset
  for (let len = 0; len <= nums.length; len++) {
    helper(len, 0, []);
  }
  return res;
};

