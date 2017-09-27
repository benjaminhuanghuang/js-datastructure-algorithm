/*
581. Shortest Unsorted Continuous Subarray

Given an integer array, you need to find one continuous subarray that if you only sort this subarray 
in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in 
ascending order.
*/

var findUnsortedSubarray = function(nums) {
  if (nums == null || nums.length == 0)
    return 0 ;

  let sorted = [...nums];
  sorted.sort((a, b) => a - b);
  let len = 0;
  for (let i =0; i< nums.length ; i++)
  {
    if(nums[i] == sorted[i])
      len ++;
    else
      break;
  }
  for (let i = nums.length -1 ; i>=0 ; i--)
  {
    if(nums[i] == sorted[i])
      len++;
    else
      break;
  }
  return Math.max(0, nums.length - len);
};

findUnsortedSubarray([1]);