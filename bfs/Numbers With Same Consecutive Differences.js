/*
967. Numbers With Same Consecutive Differences

Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Medium

https://leetcode.com/problems/numbers-with-same-consecutive-differences/
*/
/*
  BFS or DFS
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  const q = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (n == 1) q.unshift(0);
  while (--n) {
    let size = q.length;
    while (size--) {
      let num = q.shift();

      let r = num % 10; // 最右边一位
      if (r + k <= 9) {
        //append r+k as the last digit
        q.push(num * 10 + r + k);
      }
      if (r - k >= 0 && k != 0) {
        // append r - k
        q.push(num * 10 + r - k);
      }
    }
  }
  return q;
};

var numsSameConsecDiff_DFS = function (n, k) {
  function dfs(n, curr) {
    if (n == 0) {
      ans.push(curr);
      return;
    }
    let r = curr % 10;
    if (r + k < 10) {
      dfs(n - 1, curr * 10 + r + k);
    }
    if (r >= k && k != 0) {
      dfs(n - 1, curr * 10 + r - k);
    }
  }
  const ans = [];
  if (n == 1) {
    ans.push(0);
  }
  for (let i = 1; i <= 9; ++i) {
    dfs(n - 1, i);
  }
  return ans;
};
