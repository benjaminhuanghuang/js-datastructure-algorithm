/*
738. Monotone Increasing Digits

https://leetcode.com/problems/monotone-increasing-digits/
*/
/*
  Solution: find the pivot point j

  result = str[0..j] + "99.."
*/
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let str = n.toString();
  let j = str.length;
  for (let i = str.length - 1; i > 0; --i) {
    if (str[i] >= str[i - 1]) continue;
    // --str[i - 1];
    str = str.substring(0, i - 1) + String.fromCharCode(str.charCodeAt(i - 1) - 1) + str.substring(i);
    j = i;
  }
  str = str.substring(0, j) + new Array(str.length - j).fill("9").join("")

  return parseInt(str);
};
