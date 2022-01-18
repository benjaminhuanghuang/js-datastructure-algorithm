/*
  84. Largest Rectangle in Histogram
  https://leetcode.com/problems/largest-rectangle-in-histogram/
 */

/*
  brute force: O(N^2)
    当 i = last or heights[i] > heights[i+1] 的时候，此时矩形无法继续延伸，计算最大面积 
    对于heights[i], 在 [0...i-1] 和 i 之间 找出最小值
     area = min_height * (i - start + 1)
*/


/*
  https://www.youtube.com/watch?v=TH9UaZ6JGcA
  Monotone Stack 存储index， 可以用index推算 index之间的距离
  单调栈的维护是 O(n) 级的时间复杂度，因为所有元素只会进入栈一次，并且出栈后再也不会进栈了。
  if heights[i] < stack.top  说明遇到了一个较小的值
    pop，

  https://www.cnblogs.com/grandyang/p/4322653.html
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function (heights) {
   let res = 0;
   const stack = []; // save index
   heights.push(0);
   // 最后加一个0，用于触发计算
   for (let i = 0; i <= heights.length; ++i) {
     let h;
     if (i < heights.length) {
       h = heights[i];
     } else {
       h = 0; // 最后加一个0，用于触发计算
     }

     // 若 h < heights[stack.top], 矩形不能继续扩展，需要计算 heights[i-1]之前的bar形成的最大矩形
     while (stack.length && h < heights[stack[stack.length - 1]]) {
       const height = heights[stack.pop()];
       const start = stack.length === 0 ? -1 : stack[stack.length - 1];
       const area = height * (i - 1 - start); //start to bar[i-1]
       res = Math.max(res, area);
     }
     stack.push(i);
   }
   return res;
 };
