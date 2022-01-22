/*
528. Random Pick with Weight

Medium

https://leetcode.com/problems/random-pick-with-weight
*/

/*
https://www.youtube.com/watch?v=zpGGANGNdbc&ab_channel=CatRacketCode-LeetCodeJavaScript

*/
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.accumlated_sum = [];
  let total = 0;
  for (let i = 0; i < w.length; i++) {
    total += w[i];
    this.accumlated_sum.push[total];
  }
  this.total = total;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // [0 to n-1]
  let target = Math.floor(Math.random() * this.total);
  // find number just larger than target;
  let l = 0;
  let r = this.accumlated_sum.length;
  while (l < r) {
    let m = Math.floor((r - l) / 2) + l;
    if (this.accumlated_sum[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
