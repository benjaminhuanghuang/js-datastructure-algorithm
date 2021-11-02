/*

42. Trapping Rain Water

*/


/*
 Brute froce, for each column, find max of let and max of left

 Time O(N)
 Space O(1)
*/



/*
 当前单元能装多少水是取决于左右两边挡板最小值与当前值之差。

 Time O(N)
 Space O(1)
*/
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    const left = 0;
    const right = height.length - 1;
    let res = 0;

    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = max(height[left], leftMax);
            res += leftMax - height[left];
            left++;   // move left pointer
        } else {
            rightMax = max(height[right], rightMax);
            res += rightMax - height[right];
            right--;
        }
    }
    return res;
};