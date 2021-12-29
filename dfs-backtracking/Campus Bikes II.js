/*
1066. Campus Bikes II

https://leetcode.com/problems/campus-bikes-ii/

和 1057. Campus Bikes 的区别在于
Return the minimum possible sum of Manhattan distances between each worker and their assigned bike.

*/
/*

  DFS + tacktracking
  尝试所有的组合
*/
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  const usedBike = new Array(m).fill(false);
  let minDist = Number.MAX_SAFE_INTEGER;

  // i is the worker, curr is current sum of distance
  const dfs = (i, curr) => {
    if (i == workers.length) { 
      // all workers are used
      minDist = Math.min(minDist, curr);
      return;
    }
    // all bike
    for (let j = 0; i < bikes.length; j++) {
      if (usedBike[j]) {
        continue;
      }
      let dist = abs(workers[i][0] - bikes[j][0]) + abs(workers[i][1] - bikes[j][1]);
      curr += dist;
      usedBike[j] = true;
      dfs(i + 1, curr);
      curr -= dist;
      usedBike[j] = false;
    }
  };

  dfs(0, 0);
  return minDist;
};
