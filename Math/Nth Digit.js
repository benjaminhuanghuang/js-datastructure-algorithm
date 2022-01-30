/*
400. Nth Digit

Medium

https://leetcode.com/problems/nth-digit
*/

/*
讲的非常清楚
https://www.youtube.com/watch?v=Q8ypiV2Qvdw

Step 1: Nth digit 在哪个区间
  1 ~ 9
  10 ~ 99
  100 ~ 999
  
Step 2: Nth digit 在哪个数上


*/
var findNthDigit = function (n) {
  let start  = 1;  // 区间的起点
  let count  = 9;  // 每个区间几个数字
  let length  = 1;  // 区间里每个数字的长度

  while( n > count * length){
    n = n - count * length;
    start = start * 10;
    count = count * 10;
    length ++;
  }
  // 得到N所在的区间的start， count

  // Ndigit 所在的数字
  let num = Math.floor((n-1) / length) + start;
  let str = num.toString();
  return Number.parseInt(str.charAt((n-1)%length));
}


/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  // 开始时是一位数
  let range_number_length = 1;
  // 开始时一位数有 9 个
  let range = 9;
  let num = 1;

  while (n > range * range_number_length) {
    n -= range * range_number_length;
    ++range_number_length;

    num += range;
    range *= 10;
  }
  //当n落到某一个确定的区间里了，那么(n-1)/len就是目标数字在该区间里的坐标，加上num就是得到了目标数字，
  // 然后我们将目标数字start转为字符串，(n-1)%len就是所要求的目标
  num += (n - 1) / range_number_length;
  return to_string(num).at((n - 1) % range_number_length) - "0";
};
