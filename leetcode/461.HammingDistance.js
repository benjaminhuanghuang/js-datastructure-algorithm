var hammingDistance = function(x, y) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let bitX = (x >> i) & 1;
    let bitY = (y >> i) & 1;
    console.log(bitX, bitY);
    if ((bitY ^ bitY) > 0) 
      ans++;
  }
  return ans;
};

var hammingDistance2 = function(x, y) {
  let res = x ^ y;
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if ((res & 1) > 0) ans++;
    res = res >> i;
  }
  return ans;
};

console.log(hammingDistance(1, 4));

// console.log(1^0);