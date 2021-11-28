/*
  15. 3Sum

  https://leetcode.com/problems/3sum/
*/

/*
https://zxi.mytechroad.com/blog/two-pointers/leetcode-15-3sum/
选取 base number， 然后在剩余的数字里使用双指针，寻找两个数的合等于 -base
注意去除duplicated number

Solution 1: Sorting + Two pointers

Time complexity: O(nlogn + n^2)
Space complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 2; ++i) {
    if (nums[i] > 0)
    {  // nums[i] is the base number
      break;
    }
    // skip the duplicated base number
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    // double points
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] == 0) {
        ans.push([nums[i], nums[l++], nums[r--]]);
        // skip the duplicated base number !!!
        while (l < r && nums[l] == nums[l - 1]) ++l;
        while (l < r && nums[r] == nums[r + 1]) --r;
      } else if (nums[i] + nums[l] + nums[r] < 0) {
        ++l;
      } else {
        --r;
      }
    }
  }
  return ans;
};
