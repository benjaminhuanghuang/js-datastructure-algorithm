/*

42. Trapping Rain Water

*/

/*
 Brute froce, for each column, find max of let and max of left

 Time O(N)
 Space O(1)
*/

/*
  https://www.youtube.com/watch?v=ZI2z5pq0TqA&ab_channel=NeetCode

 当前单元能装多少水是取决于左右两边挡板最小值与当前值之差。
 Min(Max(L), Max(R)) - H[i]

 Time O(N)
 Space O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;

  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    // 在 height[left] 与 height[right] 中取较小值
    if (height[left] < height[right]) {
      leftMax = Math.max(height[left], leftMax);
      res += leftMax - height[left];
      left++; // move left pointer
    } else {
      rightMax = Math.max(height[right], rightMax);
      res += rightMax - height[right];
      right--;
    }
  }
  return res;  
};
