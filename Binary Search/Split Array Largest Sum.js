/*
  410. Split Array Largest Sum

  Hard

  https://leetcode.com/problems/split-array-largest-sum/
*/

/*
  DP
*/

/*
  Binary Search
  
  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-410-split-array-largest-sum/
  求 minimize the largest sum among these m subarray
  answer must be in [max(nums), sum(nums)+ 1)
  因为max(nums)一定被包含在某个group中，这个group的sum一定比max(nums)大
  
  找一个 c,把数组划分成m组，每一组的sum都不大于c
  
  Time Complexity O(log(sum(nums))* n)
*/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
 var splitArray = function(nums, m) {
  let  l = Math.max(...nums);
  let  r = nums.reduce((sum, n) => sum + n);
  while (l < r) {
    let limit = Math.floor((r - l) / 2) + l;
    if (min_groups(nums, limit) > m) 
      l = limit + 1;
    else
      r = limit;
  }
  return l;
};
// 把数组划分成若干组，每组的sum都不大于limit
function min_groups(nums,  limit) {
  let sum = 0;
  let groups = 1;
  for (const num of nums) {
    if (sum + num > limit) {
      sum = num;
      ++groups;
    } else {
      sum += num;
    }
  }    
  return groups;
}