/*
554. Brick Wall

Medium

https://leetcode.com/problems/brick-wall/

[Google]

*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  // start position counter
  const count = new Map(); // position -> start / gap of the brick
  let max_count = 0;
  // check bricks row by row
  for (const bricks of wall) {
    let start = 0;
    for (let i = 0; i < bricks.length - 1; ++i) {
      start += bricks[i];
      if (count.has(start)) {
        count.set(start, count.get(start) + 1);
      } else {
        count.set(start, 1);
      }
      max_count = Math.max(max_count, count.get(start));
    }
  }
  return wall.length - max_count;
};
