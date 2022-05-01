/*
7. Reverse Integer

https://leetcode.com/problems/reverse-integer/

Medium
*/

var reverse = function (x) {
  const positive = x > 0;
  // note!  -2147483648 = -(-2147483648)
  let num = positive ? x : -x;
  let result = 0;

  while (num > 0) {
    result = (num % 10) + result * 10;
    num = Math.floor(num / 10);
  }

  if (!positive) {
    result = -result;
  }
  // Wrong! Number.MAX_SAFE_INTEGER is 2^53 - 1
  //if (result >= Number.MAX_SAFE_INTEGER || result <= Number.MIN_SAFE_INTEGER)
  if (result >= Math.pow(2, 31) - 1 || result <= -Math.pow(2, 31)) result = 0;
  return result;
};
