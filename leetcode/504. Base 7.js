var convertToBase7 = function(num) {
  if (num == 0)
    return "0";
  let isNegative = num < 0 ? true:false;
  if (isNegative)
    num = -num;

  let res = "";
  while (num > 0)
  {
    let digit = num % 7;
    res= digit + res;
    num = parseInt(num / 7);
  }

  if (isNegative)
    res = "-"+ res;
  return res;
};