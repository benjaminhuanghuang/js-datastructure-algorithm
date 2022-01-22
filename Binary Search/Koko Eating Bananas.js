/*
875. Koko Eating Bananas

https://leetcode.com/problems/koko-eating-bananas/

*/

/*
search for the smallest k [1, max_pile_height] such that eating time h <= H.
当求出了 mid 之后，需要统计用该速度吃完所有的香蕉堆所需要的时间，
统计的方法就是遍历每堆的香蕉个数，然后算吃完该堆要的时间。比如 K=4，那么假如有3个香蕉，需要1个小时，有4香蕉，还是1个小时，有5个香蕉，就需要两个小时，
如果将三种情况融合为一个式子呢，就是用吃速加上香蕉个数减去1，再除以吃速即可，即 (pile-1)/mid + 1 = (pile+mid-1)/mid，
*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const eat = (piles, k) => {
    let h = 0;
    // total time
    for (const p of piles) {
      if (p % k === 0) h += p / k;
      else h += Math.floor(p / k) + 1;
    }
    return h;
  };

  let l = 1;
  let r = Math.max(...piles) + 1;
  while (l < r) {
    let m = Math.floor((r - l) / 2) + l;
    // total time
    let time = eat(piles, m);
    if (time <= h) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
