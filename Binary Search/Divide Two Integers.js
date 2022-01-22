/*
29. Divide Two Integers

Medium

https://leetcode.com/problems/divide-two-integers
*/
/*
  把除法转化成减法， 商=减了几次
*/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor == 0) return Number.MAX_SAFE_INTEGER;
  if (divisor == 1) return dividend;
  if (divisor == -1) {
    if (dividend <= -2147483648) return 2147483647;
    return -dividend;
  }
  const isPositive = !((dividend > 0) ^ (divisor > 0));
  dividend = Math.abs(dividend); // abs(-2147483648) overflow
  divisor = Math.abs(divisor);

  let result = 0; // result can be 2147483648
  //
  while (dividend >= divisor) {
    let cur = 1; // 减了几次
    let start = divisor;
    //用除数每次*2（向左移动一位）去逼近被除数，被除数减去新的除数如此循环。
    while (start <= dividend >> 1) {
      start <<= 1;
      cur <<= 1;
    }
    dividend -= start;
    result += cur;
  }

  if (isPositive) {
    return result;
  } else {
    return -result;
  }
};
