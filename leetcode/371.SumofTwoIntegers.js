var getSum = function(a, b) {
  let carry = b;
  let sum = a;
   while (carry != 0) {
    let nextCarry = (sum & carry) << 1;
    sum = sum ^ carry;
    carry = nextCarry;
  }
  return sum;
};

console.log(getSum(1, 4));
