/*
11. Container With Most Water

https://leetcode.com/problems/container-with-most-water/
*/


/*
http://zxi.mytechroad.com/blog/two-pointers/leetcode-11-container-with-most-water/

Solution: two pointers
Time complexity: O(n)
Space complexity: O(1)

Brute force:  O(N^2)
*/


/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r)
  {
    let h = Math.min(height[l], height[r]);
    ans = Math.max(ans, h * (r - l));
    if (height[l] < height[r]) // 每次舍弃比较低的
      ++l;
    else
      --r;
  }
  return ans;
};