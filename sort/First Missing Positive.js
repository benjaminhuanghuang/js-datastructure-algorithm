/*
41. First Missing Positive

https://leetcode.com/problems/first-missing-positive/
*/

/*
https://www.youtube.com/watch?v=jfb72FfxWKU

Bucket Sort

Time O(N)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length == 0) return 1;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] != nums[i]) {
      // Put num[i] to the right position num[nuims[i]-1] (nums[i] != i + 1)
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) return i + 1;
  }
  return nums.length + 1;
};
