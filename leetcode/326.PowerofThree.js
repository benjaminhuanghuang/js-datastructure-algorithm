/*
  3^x = n
*/
var isPowerOfThree = function(n) {
  if(n <= 0)
    return false;
  if(n == 1)
    return 0;
  return n %3 == 0 && isPowerOfThree(n/3);
};