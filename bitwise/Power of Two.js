/*
231. Power of Two

Level: Easy

https://leetcode.com/problems/power-of-two

- 326. Power of Three     # n % 3
- 342. Power of Four

*/

var isPowerOfTwo = function (n) {
  let countOfOne = 0;
  while (n > 0) {
    countOfOne += n & 1;
    n >>= 1;
  }
  return countOfOne == 1;
};
