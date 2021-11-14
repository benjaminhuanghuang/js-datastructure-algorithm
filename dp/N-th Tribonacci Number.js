/*

1137. N-th Tribonacci Number



*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;

  if (n <= 2) return 1;

  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += tribonacci(n - 1 - i);
  }
  return sum;
};

/*

  Memoization
*/
const m = new Map();
m.set(0, 0);
m.set(1, 1);
m.set(2, 1);
var tribonacci = function (n) {
  if (m.has(n)) return m.get(n);

  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += tribonacci(n - 1 - i);
  }
  m.set(n, sum);
  return sum;
};
