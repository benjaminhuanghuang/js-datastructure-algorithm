var addBinary = function(a, b) {
  let iA = a.length - 1;
  let iB = b.length - 1;
  let carry = 0;
  let res = "";
  while (iA >= 0 || iB >= 0) {
    let numA = iA >= 0 ? parseInt(a[iA]) : 0;
    let numB = iB >= 0 ? parseInt(b[iB]) : 0;
    let sum = numA + numB + carry;
    let digit = sum % 2;
    carry = parseInt(sum / 2);
    res = digit + res;
    iA--;
    iB--;
  }
  if (carry > 0) res = carry + res;

  return res;
};

let res = addBinary("0", "0");
console.log(res);
