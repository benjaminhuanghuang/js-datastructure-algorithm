/*
43. Multiply Strings

Medium

https://leetcode.com/problems/multiply-strings/
*/

/*
  https://www.cnblogs.com/grandyang/p/4395356.html

      8 9  <- num2
      7 6  <- num1
  -------
      5 4
    4 8
    6 3
  5 6
  -------
  6 7 6 4
  num1 和 num2 中任意位置的两个数字相乘，得到的两位数在最终结果中的位置是确定的，
  比如 num1 中位置为i的数字乘以 num2 中位置为j的数字，那么得到的两位数字的位置为 i+j 和 i+j+1，
  注意方向：两个数字从右向左，result从左向右
  从个位数乘起, 乘得的结果放在res的[i+j][i+j+1]上 [i+j+1]是低位
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  var res = Array(len1 + len2).fill(0);
  
  var carry = 0;
  var val = 0;
  var index = 0;

  for (var i = len1 - 1; i >= 0; i--) {
    carry = 0;
    for (var j = len2 - 1; j >= 0; j--) {
      index = len1 + len2 - 2 - i - j;
      val = num1[i] * num2[j] + carry + res[index];
      carry = Math.floor(val / 10);
      res[index] = val % 10;
    }
    if (carry) res[index + 1] = carry;
  }

  while (res.length > 1 && res[res.length - 1] === 0) res.pop();

  return res.reverse().join("");
};
