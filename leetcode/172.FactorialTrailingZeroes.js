// n! = 1*2*3*4... *n
// The number of trailing 0 = the count of 2*5 pair
// https://discuss.leetcode.com/topic/6848/my-explanation-of-the-log-n-solution

var trailingZeroes = function(n) {
  let count_five = 0;
  while (n > 0)
  {
      let k = Math.floor(n / 5);
      count_five += k;
      n = k;
  }
  return count_five;
};