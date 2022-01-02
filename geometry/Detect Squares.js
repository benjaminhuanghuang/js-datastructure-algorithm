/*
2013. Detect Squares


https://leetcode.com/problems/detect-squares/

[Google]

*/

/*
  to point [px, py], 对角线的点是[x, y]  遍历所有的x， 根据 abs(x-px) 可以算出y 
*/
var DetectSquares = function () {
  this.pointsCount = Array.from(Array(1001), () => Array(1001).fill(0));
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  this.pointsCount[point[0]][point[1]] += 1;
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let count = 0;
  const [px, py] = point;

  for (let x = 0; x <= 1000; x++) {
    const d = Math.abs(px - x);
    if (d == 0) continue;
    let y = py - d;
    if (y >= 0 && y <= 1000) count += this.pointsCount[x][y] * this.pointsCount[x][py] * this.pointsCount[px][y];

    y = py + d;
    if (y >= 0 && y <= 1000) count += this.pointsCount[x][y] * this.pointsCount[x][py] * this.pointsCount[px][y];
  }
  return count;
};
