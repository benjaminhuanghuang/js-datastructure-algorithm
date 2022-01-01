/*
853. Car Fleet

https://leetcode.com/problems/car-fleet/
[Google]
*/

/*
  1. sort position
  2. 比较  arrive time target / speed

*/
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  if (n < 2) {
    return n;
  }
  const cars = [];

  for (let i = 0; i < n; i++) {
    const arriveTime = (target - position[i]) / speed[i];
    cars.push([position[i], arriveTime]);
  }
  // sort by position
  cars.sort((a, b) => a[0] - b[0]);

  let res = 0;

  for (let j = n - 1; j > 0; j--) {
    if (cars[j][1] < cars[j - 1][1]) {
      res++;
    } else {
      cars[j - 1][1] = cars[j][1];
    }
  }
  return res + 1;
};
