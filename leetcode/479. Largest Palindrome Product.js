/*
479. Largest Palindrome Product
*/
/*
输入范围n∈[1, 8]，除n = 1以外，其余n值最大回文数palindrome的位数均为偶数，
可以拆分为half与reversed(half)左右两半

从上界high = pow(10, n) - 1向下界low = pow(10, n - 1)枚举half，构造回文，
检查是否存在两个n位数的除数
*/

var largestPalindrome = function(n) {
  if (n == 1) {
    return 9;
  }

  let high = Math.pow(10, n) - 1;
  let low = high / 10;

  for (let i = high; i > low; i--) {
    let palindrome = createPalindrome(i);

    for (let j = high; j > low; j--) {
      if (palindrome / j > high) {
        break;
      }
      if (palindrome % j == 0) {
        return int(palindrome % 1337);
      }
    }
  }
  return -1;
};

function createPalindrome(num) {
  let str = num + ("" + num).reverse();
  return parseInt(str);
}
