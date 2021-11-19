/*
78 Subsets 

https://leetcode.com/problems/subsets/
*/

/*
https://zxi.mytechroad.com/blog/searching/leetcode-78-subsets/ [一定要看]

Time complexity: O(2^n)
Space complexity: O(n)
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

  for (let len = 0; len <= nums.length; len++) {
    helper(len, 0, []);
  }
  return res;
};

