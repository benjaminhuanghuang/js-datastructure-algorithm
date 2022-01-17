/*
503. Next Greater Element II

Medium

https://leetcode.com/problems/next-greater-element-ii/
*/
/*
  Use Monotonic Stacks maintain the index.
  
  Time O(n) Space O(n)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = new Array(n);

  // Use Monotonic Stacks maintain the index.
  const s = [];

  // 处理 circular array 的技巧  假设array 重复
  for (let i = 2 * n - 1; i >= 0; i--) {
    //
    while (s.length > 0 && nums[s[s.length - 1]] <= nums[i % n]) {
      // 直到当前元素比stack 顶部元素小或stack is empty
      s.pop();
    }
    res[i % n] = s.length == 0 ? -1 : nums[s[s.length - 1]];
    s.push(i % n);
  }
  return res;
};
