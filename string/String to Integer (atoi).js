/*

  8 String to Integer (atoi) 
  
  https://leetcode.com/problems/string-to-integer-atoi/
*/

/*
  关键点：1.正负号；2.中间存在字母（只取字母前的数字）;3.溢出; 4.前后空格
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (s == null || s.trim().length < 1) return 0;

  //处理掉前后空格
  const str = s.trim();

  let sign = 1;
  let index = 0;
  //判断正负号
  if (str[0] == "+") index++;
  if (str[0] == "-") {
    sign = -1;
    index++;
  }

  let num = 0;
  const max_int32 = 2 ** 31 - 1;
  for (let i = index; i < str.length; i++) {
    if (str.charCodeAt(i) >= "0".charCodeAt(0) && str.charCodeAt(i) <= "9".charCodeAt(0)) {
      // if is digit
      // 关键部分: check overflow
      if (
        num > Math.floor(max_int32 / 10) ||
        (num == Math.floor(max_int32 / 10) && str.charCodeAt(i)) > "7".charCodeAt(0)
      ) {
        if (sign > 0) return max_int32;
        else {
          return -(2 ** 31);
        }
      }
      // normal case
      num = 10 * num + str.charCodeAt(i) - "0".charCodeAt(0);
    }
    //如果是字母，跳出循环
    else break;
  }

  return num * sign;
};
