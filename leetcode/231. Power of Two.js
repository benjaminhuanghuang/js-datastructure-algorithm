// The power of 2 only have one "1" ant most left bit
var isPowerOfTwo = function(n) {
  return (n > 0) && ((n & (n - 1)) == 0);
};