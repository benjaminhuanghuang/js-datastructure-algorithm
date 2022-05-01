/*
8. String to Integer (atoi)

https://leetcode.com/problems/string-to-integer-atoi/

Medium
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let positive = true;
  let res = 0;
  const len = s.length;
  var INT_MAX = Math.pow(2, 31) - 1;
  var INT_MIN = -Math.pow(2, 31);
  while (s[i] === " ") i++;

  if (s[i] === "+" || s[i] === "-") {
    positive = s[i] === "+";
    i++;
  }

  while (s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + (s[i] - 0);
    if (positive && res > INT_MAX) return INT_MAX;
    if (!positive && res > INT_MAX + 1) return INT_MIN;
    i++;
  }
  return positive ? res : -res;
};
