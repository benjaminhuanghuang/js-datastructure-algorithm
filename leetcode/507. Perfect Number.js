/*
507. Perfect Number
*/

var checkPerfectNumber = function(num) {
  if (num == 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= num; ++i) {
    if (num % i == 0) sum += i + num / i;
    if (i * i == num) sum -= i;   // Note!
    if (sum > num) return false;
  }
  return sum == num;
};

var checkPerfectNumber2 = function(num) {
  let sum = 1;
  let div = 2;
  while (div * div <= num) {
    if (num % div == 0) {
      sum += div;
      if (div * div != num) sum += num / div;
    }
    div += 1;
  }
  return sum == num;
};
