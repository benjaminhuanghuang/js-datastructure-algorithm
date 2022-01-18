/*
166. Fraction to Recurring Decimal

Medium

https://leetcode.com/problems/fraction-to-recurring-decimal/
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator == 0) return "0";

  // abs(int_min) case overflow

  let sign = 1;
  if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) sign = -1;

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator).toString();
  if (numerator % denominator == 0) return integerPart;

  // get integer part
  let temp = "";
  if (sign == -1) temp = "-" + integerPart + ".";
  else temp = integerPart + ".";

  let temp_num = numerator % denominator;
  let pos = temp.length;
  let break_pos = -1;
  const track = new Map(); // key: temp_num, val: position
  while (temp_num != 0 && break_pos == -1) {
    temp_num *= 10;
    if (track.has(temp_num)) {
      break_pos = track.get(temp_num);
      break;
    }
    track.set(temp_num, pos++);

    temp += Math.floor(temp_num / denominator);
    temp_num = temp_num % denominator;
  }
  if (break_pos != -1) {
    return temp.substring(0, break_pos) + "(" + temp.substring(break_pos, pos) + ")";
  }
  return temp;
};
