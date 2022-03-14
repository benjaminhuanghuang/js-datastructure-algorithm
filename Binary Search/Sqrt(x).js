/*
69. Sqrt(x)

Easy

https://leetcode.com/problems/sqrtx/

# 50. Pow(x, n)
*/
/**
 * @param {number} x
 * @return {number}
 */

/*
 Better solution , use HuaHua template [l, r)
*/
var mySqrt = function (x) {
  let l = 1;
  let r = x + 1;

  while (l < r) {
    let m = Math.floor((r - l) / 2) + l;
    // find first mid*mid > x
    if (m * m > x) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l - 1; // l 是最小的 满足 l * l > x 的值
};

var mySqrt = function (x) {
  let low = 1;
  let high = x;

  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1; // low 是最小的 满足 l * l > x 的值
};
