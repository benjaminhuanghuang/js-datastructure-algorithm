/*
509. Fibonacci Number
https://leetcode.com/problems/fibonacci-number/
*/


/*
  Time Complexity : 
    T(n<=1) = O(1)
    T(n) = T(n-1) + T(n-2) + O(1)
     < T(n-1) + T(n-1) 
     = 2*T(n-1)   
     = 2*2*T(n-2)
     = 2*2*2*T(n-3)
     ....
     = 2^i*T(n-i)
     ...
     ==> O(2^n)

  Alternatively, you can draw the recursion tree, which will have depth N and figure out time complexity O(2^N)
  2^0 + 2^1 + 2^2 + ...... + 2^n = 2^(n+1) - 1 = O(2^n) 
*/
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if (n  <=1 ) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
  
};


/*
  记忆化递归

  Time: O(N)
*/
const fib = new Map();

var fib = function(n) {
  if (n  <=1 ) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};


/*
  DP 
*/
function fibonacci_dp(n) {
  var f = [];
  f[0] = 0;
  f[1] = 1;
  for (var i = 2; i <= n; i++) f[i] = f[i - 1] + f[i - 2];
  return f[n];
}

