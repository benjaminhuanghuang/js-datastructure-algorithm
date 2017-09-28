var reverse = function(x) {
  let n = x;
  let isNegative = x < 0;
  if(isNegative)
    n = -n;
  let res = 0;
  while(n > 0)
  {
    let digit = n %10;
    n = parseInt(n / 10);
    res = res * 10 + digit;
  }
  if(isNegative)
    res = - res;
  if (res > Math.pow(2, 31) || res < -Math.pow(2, 31))
    res = 0;
 
  return res;
};
console.log(Math.pow(2, 31));
console.log(reverse(1));