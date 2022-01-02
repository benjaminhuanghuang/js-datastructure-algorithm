/*
1011. Capacity To Ship Packages Within D Days

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

*/

/*
https://www.youtube.com/watch?v=-F2ysRiSTvk&ab_channel=HuifengGuan

猜测一个装载能力C，计算这些包裹按照每船容量为C进行安排，需要装载几次。
如果次数大于D，那么下一轮需要猜测更大的C；否则猜测更小的C。

Solution: Binary Search
*/
var shipWithinDays = function (weights, days) {
  const checkOk = (weights, cap, days) => {
    const count = 0;
    for (let i = 0; i < weights.length; i++) {
      let j = i;
      let sum = 0;
      while (j < weights.length && sum + weights[j] <= cap) {
        sum += weights[j];
        j++;
      }
      count += 1;
      if (count > D) return false;
      i = j;
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
