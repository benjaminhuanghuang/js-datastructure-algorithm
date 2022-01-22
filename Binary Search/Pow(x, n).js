/*
50. Pow(x, n)
Implement pow(x, n).

Medium
https://leetcode.com/problems/powx-n/

*/

/*
  Brute Force
  x*x*x.....  
  Time complexity: O(n)
*/

/*
  binary search

*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) return PowerHelper(x, n);
  else return 1 / PowerHelper(x, -n);
};

// x^n = x^(n/2)*x^(n/2)*x^(n%2)
function PowerHelper(x, n) {
  if (n == 0) return 1;
  let res = PowerHelper(x, Math.floor(n / 2));
  res *= res;
  if (n % 2 == 1) {
    res *= x;
  }
  return res;
}
// 使用更少的空间
function PowerHelper(x, n) {
  let res = 1.0;
  let currProduct = x;
  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 == 1) {
      res *= currProduct;
    }
    currProduct *= currProduct;
  }
  return res;
}