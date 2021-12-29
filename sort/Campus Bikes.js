/*

1057. Campus Bikes

Medium

[Google]

https://leetcode.com/problems/campus-bikes/
https://ttzztt.gitbooks.io/lc/content/sort/bucket-sort/campus-bikes.html

choose the (worker, bike) pair with the shortest Manhattan distance between each other

Resutl :[1,0]
Explanation: 
Worker 1 grabs Bike 0  and Worker 0 is assigned Bike 1. So the output is [1, 0].
*/

/*
  两两计算 worker和 bike的距离，得到 distance -> [[worker, bike], [worker, bike]...]
  Bucket Sort
  T: O(M *N), S: O(M * N)

*/
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  // 1. calculate all distance between each pair of worker and bike
  const distances = new Map();
  for (let i = 0; i < workers.length; i++) {
    const w = workers[i];
    for (let j = 0; j < bikes.length; j++) {
      const b = bikes[j];
      const dist = Math.abs(w[0] - b[0]) + Math.abs(w[1] - b[1]);
      if (!distances.has(dist)) {
        distances.set(dist, []);
      }
      distances.get(dist).push([i, j]);
    }
  }

  //

  const res = new Array(workers.length).fill(-1);
  const usedBick = new Set();

  // bucket 
  for (let d = 0; d <= 1000 * 2; d++) {
    if (distances.has(d)) {
      const bucket = distances.get(i);
      for(const [wi, bi] of bucket){
        if(res[wi] === -1 && !usedBick.has(bi)) { // wi does not has bike
           res[worker] = bike;
           usedBick.add(bike);
        }
      }
    }
  }
  return res;
};
