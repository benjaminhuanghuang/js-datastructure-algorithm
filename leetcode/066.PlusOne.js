
var plusOne = function(digits) {
  if(digits == null || digits.length == 0)
    return null;
  for (let i = digits.length - 1; i >= 0; i--)
  {
      if (digits[i] < 9)
      {
          digits[i]++;  
          return digits; // Early return
      }
      // >=9
      digits[i] = 0;
  }
  // all digits >=9 
  var res = [1,...digits]
  return res;  
};

let digits = [0];
let res = plusOne(digits);
console.log(res);

