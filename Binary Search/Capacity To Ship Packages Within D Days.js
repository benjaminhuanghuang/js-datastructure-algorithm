/*
1011. Capacity To Ship Packages Within D Days

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

*/

/*
https://www.youtube.com/watch?v=-F2ysRiSTvk&ab_channel=HuifengGuan
D 天运完
猜测一个装载能力C，计算这些包裹按照每船容量为C进行安排，需要装载几次。
如果次数大于D，那么下一轮需要猜测更大的C；否则猜测更小的C。

Solution: Binary Search
*/
var shipWithinDays = function (weights, days) {
  const checkOk = (weights, cap, days) => {
    let d = 0;
    let i = 0;
    while (i < weights.length) {
      let j = i;
      let sum = 0;
      while (j < weights.length && sum + weights[j] <= cap) {
        sum += weights[j];
        j++;
      }
      d += 1;
      if (d > days) return false;
      i = j;
    }
    return true;
  };

  let left = Number.MAX_SAFE_INTEGER; // min weight
  let right = 0; // all weight
  for (const w of weights) {
    left = Math.min(left, w);
    right += w;
  }

  while (left < right) {
    const cap = left + Math.floor((right - left) / 2);
    if (checkOk(weights, cap, days)) {
      right = cap;
    } else {
      left = cap + 1;
    }
  }
  return left;
};
