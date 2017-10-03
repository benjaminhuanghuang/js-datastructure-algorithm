var addStrings = function(num1, num2) {
  let res = "";
  let i1 = num1.length -1;
  let i2 = num2.length -1;

  let carry = 0;
  while(i1 >=0 || i2>=0)
  {
    let digit1 = i1>=0 ? parseInt(num1[i1]) : 0;
    let digit2 = i2>=0 ? parseInt(num2[i2]) : 0;
    let sum = carry + digit1 + digit2;
    carry = parseInt(sum / 10);
    res = (sum % 10) + res; 
    i1--;
    i2--;
  }
  if (carry > 0)
    res = carry + res;

  return res;
};