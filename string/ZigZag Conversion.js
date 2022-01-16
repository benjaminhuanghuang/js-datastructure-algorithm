/*
6. ZigZag Conversion

https://leetcode.com/problems/zigzag-conversion/
*/

/*
https://www.youtube.com/watch?v=Q2Tw6gcVEwc&ab_channel=NeetCode
P   A   H   N
A P L S I I G
Y   I   R

fisrt row  P A H N 之间差 (numRows - 1) * 2
last row   Y I R 之间也是差 (numRows - 1) * 2

其余当中的 每个人 row 都有两个字符， 垂直列上字符之间的距离也是 (numRows - 1) * 2

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let res = "";

  for (let r = 0; r < numRows; i++) {
    const increment = 2 * (numRows - 1);
    // 每一行的第一个字符是s[r]
    for (let i = r; i < s.length; i = i + increment) {
      res += s[i]; // every row, 垂直列上字符之间的距离是 (numRows - 1) * 2
      if (r > 0 || (r < numRows - 1 && i + increment - 2 * r < s.length)) {
        // 斜向字符与前一个垂直列上字符的距离是 i + increment - 2 * r
        res += s[i + increment - 2 * r];
      }
    }
  }
  return res;
};
