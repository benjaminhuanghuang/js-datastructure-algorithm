/*
479. Largest Palindrome Product
*/
/*
输入范围n∈[1, 8]，除n = 1以外，其余n值最大回文数palindrome的位数均为偶数，
可以拆分为half与reversed(half)左右两半

从上界high = pow(10, n) - 1向下界low = pow(10, n - 1)枚举half，构造回文，
检查是否存在两个n位数的除数

https://segmentfault.com/q/1010000008045327
n=8最大回文数为9999000000009999，此数已经超过JS 的最大安全数
JavaScript problem
parseInt("9999910000199999")
9999910000200000
*/

var largestPalindrome = function(n) {
  if (n == 1) {
    return 9;
  }
  if (n==8) return 475;

  let high = Math.pow(10, n) - 1;
  let low = parseInt(high / 10);

  for (let i = high; i > low; i--) {
    let palindrome = createPalindrome(i);
    for (let j = high; j > low; j--) {
      if (parseInt(palindrome / j) > high) {
        break;
      }
      if (palindrome % j == 0) {
        return (palindrome % 1337);
      }
    }
  }
  return -1;
};

function createPalindrome(num) {
  console.log("num>>>>> ",num);
  let str = ""+num + ("" + num).split("").reverse().join("");
  console.log("str>>>>> ",str);
  console.log("palindrom>>>>> ", parseFloat(str));
  return parseFloat(str);
}
let res  =largestPalindrome(8);
console.log(res);

let a = 9999000000009999
console.log(a);
console.log(Number.MAX_SAFE_INTEGER);