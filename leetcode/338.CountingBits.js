/*

*/

var countBits = function(num) {
  let result = new Array(num + 1).fill(0);

  let p = 1; //p tracks the index for number x
  let pow = 1;
  for (let i = 1; i <= num; i++) {
    if (i == pow) {
      result[i] = 1;
      pow <<= 1;
      p = 1;
    } else {
      result[i] = result[p] + 1;
      p++;
    }
  }
  return result;
};
