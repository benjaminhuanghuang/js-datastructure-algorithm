/*
448. Find All Numbers Disappeared in an Array

Easy

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

[MS]
*/

/*
https://zxi.mytechroad.com/blog/algorithms/array/leetcode-448-find-all-numbers-disappeared-in-an-array/

Time complexity: O(n)
Space complexity: O(1)

  数组中的数字均满足1 ≤ a[i] ≤ n，也就是说其中的元素和数组的位置索引存在某种关联性。

  如果数组中不缺少数字，那么每一个元素就会与数组的位置索引所一一对应，
  若元素存在num[i]，则将其看作index，那么就把num[i]-1位置上的元素变为负数。
  最终没有变为负数的元素所在的位置索引值，就是我们没有见过的数字。

  如  1 4 4 4， 会被set成  -1，4，4，-4
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i != nums.length; ++i) {
    // 对于num[i]，将其看作index，那么就把num[i]-1位置上的元素变为负数。
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  const ans = [];
  for (let i = 0; i != nums.length; ++i){
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  } 
  return ans;
};
