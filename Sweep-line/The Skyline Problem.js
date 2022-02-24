/*
218. The Skyline Problem

Hard

https://leetcode.com/problems/the-skyline-problem/
*/

/*
https://zxi.mytechroad.com/blog/tree/leetcode-218-the-skyline-problem/


*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {};

/*
https://www.youtube.com/watch?v=T-oRauMyXkU&t=0s&ab_channel=CatRacketCode-LeetCodeJavaScript

*/
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const heights = [];

  for (let i = 0; i < buildings.length; i++) {
    const b = buildings[i];
    // use li, -hi to mark the start point
    // use ri, hi to mark the end point
    heights.push([b[0], -b[2]]);
    heights.push([b[1], b[2]]);
  }

  // sort by left and right asc
  heights.sort((a, b) => {
    if(a[0]!= b[0]){
      return a[0]- b[0];
    }
    return a[1] -  b[1];
  });

  const currHeights = {};

  let pre = 0;
  const res = [];
  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    if (h[1] < 0) {
      // is start
      currHeights[-h[1]] = currHeights[-h[1]] ? currHeights[-h[1]] + 1 : 1;
    } else {
      currHeights[h[1]]--;
      if (currHeights[h[1]] == 0) {
        delete currHeights[h[1]];
      }
    }

    let cur = 0;

    for (let key in currHeights) {
      // get max height
      if (key - 0 > cur) {
        // convert key from string to number
        cur = key - 0;
      }
    }

    if (pre != cur) {
      res.push([h[0], cur]);
      pre = cur;
    }
  }
  return res;
};
