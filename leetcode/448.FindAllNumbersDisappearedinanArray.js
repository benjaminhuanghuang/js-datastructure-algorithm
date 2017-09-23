/*
448. Find All Numbers Disappeared in an Array

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not 
count as extra space.
*/
var findDisappearedNumbers = function(nums) {
  if (nums == null || nums.length == 0) return [];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    nums[Math.abs(num)-1] = -Math.abs(nums[Math.abs(num)-1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
};
