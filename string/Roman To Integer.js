/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s == null || s.length == 0) return -1;
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;
  let pre = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = romanMap[s[i]];
    if (pre > curr)
      //IV -  or VI +
      ans -= curr;
    else ans += curr;

    pre = curr;
  }
  return ans;
};

let res = romanToInt("DCXXI");
console.log(res);
