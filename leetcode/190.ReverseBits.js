
/*
在 JavaScript 中，所有整数字变量默认都是有符号整数
unsigned = signed >>> 0;// 有符号变无符号
signed = unsigned << 0;// 无符号变有符号
Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, 
and shifting in zeroes from the left.


If this function is called many times, how would you optimize it?

*/
var reverseBits = function(n) {
  let res =0;
  for(let i =0;i< 32;i++)
  {
    let bit = ( n >> i ) &1;
    res = (res <<1) + bit;
  }
  res = res >>> 0;
  return res;
};
