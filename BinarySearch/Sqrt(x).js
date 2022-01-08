/*
69. Sqrt(x)

https://leetcode.com/problems/sqrtx/
*/
/**
 * @param {number} x
 * @return {number}
 */
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

/*
 Better solution , use HuaHua tempalte [l, r)
*/
var mySqrt = function (x) {
  let low = 1;
  let high = x + 1;

  while (low < high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (mid * mid <= x) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low - 1; // low 是最小的 满足 l * l >= x 的值
};