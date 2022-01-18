/*

356. Line Reflection

https://leetcode.com/problems/line-reflection/
https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/356-line-reflection.html

Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.

Example 1: Given points = [[1,1],[-1,1]], return true.

Example 2: Given points = [[1,1],[-1,-1]], return false.

Follow up: Could you do better than O(n2)?

问存不存在一条平行于y轴的直线，使得所有的点关于该直线对称

Hint:

Find the smallest and largest x-value for all points. If there is a line then it should be at y = (minX + maxX) / 2. 
For each point, make sure that it has a reflected point in the opposite side.
*/

/*
   先找出轴，再判断是否对称, 对称means Y坐标相同，X 离对称轴距离相等
*/
function isReflected(points) {
  if(points==null || points.length<2)
      return true;

  const map = new Map(); // x-> set() of Y
  // 找出对称轴， 对称轴 = (minX + maxX) / 2
  let minX=Integer.MAX_VALUE;
  let maxX=Integer.MIN_VALUE;

  for(const [x, y] of points){
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    if(!map.has(x)){
      map.set(x, new Set());
    }
    map.get(x).add(y);
  }

  const axis = minX+maxX;
  // 对于每一个(x, y) check  是否存在 (x的对称点, y)
  for(const [x, y] of points){
      const left = x;
      const right = axis-left;
      if(!map.has(right) || !map.get(right).has(y)){
          return false;
      }
  }

  return true;
}
