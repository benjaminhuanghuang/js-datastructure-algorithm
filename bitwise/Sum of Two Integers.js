/*

371. Sum of Two Integers

https://leetcode.com/problems/sum-of-two-integers/
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  while (b != 0)
  {
    // left shift of nagetive value cause error!
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};