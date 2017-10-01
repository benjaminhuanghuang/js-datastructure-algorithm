/*
Given a positive integer, output its complement number. 

1、因为java（或其他）里，int一般长度是32bit，直接按位取反不对，因为前面多余的0不能取反 
2、如果遍历的话，开销比较大

Solution
1、利用java里的方法Integer.highestOneBit，获得数字num出现1的最高位（也就是对应的2进制里，第一个出现1的位为1，其他为0的值） 
2、将上面的值左移1，然后减1，就可以构造一个正好覆盖num整个数x位长度的遮罩mask（后x位为1，其他为0）
int mask = (Integer.highestOneBit(num) << 1) -1; 
3、使用如上mask，将num的部分进行取反就可以
例如：5的二进制是101，我们的构造的掩码为mask=111，两者异或则为010，即是所要的结果

*/
var findComplement = function(num) {
  let mask = 1, temp = num;
  while(temp > 0) {
    mask = mask << 1;
    temp = temp >> 1;
  }
  return num^(mask-1);
};