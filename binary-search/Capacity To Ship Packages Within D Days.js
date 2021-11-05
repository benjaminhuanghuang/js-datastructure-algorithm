/*

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

*/

/*
https://www.youtube.com/watch?v=-F2ysRiSTvk&ab_channel=HuifengGuan
Solution: Binary Search
*/
var shipWithinDays = function (weights, days) {
  const checkOk = (weights, cap, days) => {
    const count = 0;
    for (let i = 0; i < weights.length; i++) {
      i;
    }
  };

  let left = Number.MAX_SAFE_INTEGER;
  let right = 0;
  for (const w of weights) {
    left = Math.min(left, w);
    right += w;
  }

  while (left < right) {
    const cap = left + (right - left) / 2;
    if (checkOk(weights, cap, days)) {
      right = cap;
    } else {
      left = cap + 1;
    }

    return left;
  }
};
