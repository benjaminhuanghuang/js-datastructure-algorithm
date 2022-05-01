var isPalindrome = function (x) {
  if (x < 0) return false;
  let reverse = 0;
  let n = x;
  while (n > 0) {
    let dig = n % 10;
    reverse = reverse * 10 + dig;
    n = Math.floor(n / 10);
  }
  return x == reverse;
};
