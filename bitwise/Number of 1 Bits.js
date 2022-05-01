/*
191. Number of 1 Bits

https://leetcode.com/problems/number-of-1-bits/submissions/
*/

var hammingWeight_WRONG = function(n) {
  let count =0;
  // note! when n = 11111111111111111111111111111101
  while(n > 0) {
      if(n & 1) {
          count++;
      }
      n = n >> 1;   // ! Use >>> 
  }
  return count;
};


var hammingWeight = function(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    // 表示带符号右移
    if ((n >> i) & 1) count++;
  }
  return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let count =0;
  
  while(n){
      if(n & 1 ==1){
          count ++;
      }
      // 把所有的数字向右移动对应巍峨位数，低位移出（舍弃），高位的空位补零
      n = n >>> 1;
  }
  return count
};
