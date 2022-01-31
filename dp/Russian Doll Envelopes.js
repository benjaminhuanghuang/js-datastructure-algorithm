/*
354. Russian Doll Envelopes

Hard

https://leetcode.com/problems/russian-doll-envelopes

[FB]

# 300. Longest Increasing Subsequence
# 1691. Maximum Height by Stacking Cuboids
*/

/*
  DP 
  Time: O(N^2)   TLE

  Sory w ascending and sort h descending
  这是由于 envelope 不能装 w 相等的envelope中
  问题转化成 求 h 的 Longest Increasing Subsequence
  
*/
var maxEnvelopes = function (envelopes) {
  const n = envelopes.length;
  if (n == 0) return 0;

  // Sort w ascending，宽度相等时，让高度大的在前面
  envelopes.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/*
  Binary Search
  Time O(NlogN)
*/
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // Sort w ascending，宽度相等时，让高度大的在前面
  envelopes.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  // q 的含义为 长度为i的LIS的结尾元素是q[i]
  const q = [];
  for (let i = 0; i < envelopes.length; ++i) {
    if (q.length == 0 || envelopes[i][1] > q[q.length - 1]) {
      // envelopes[i] 比 q中的最后一个envelope 大
      q.push(envelopes[i][1]);
    } else {
      // 否则找出q中第一个 >= envelopes[i]的envelop,用envelopes[i]替换
      let left = 0,
        right = dp.length,
        target = q[i][1];
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (q[mid] >= target) right = mid;
        else left = mid + 1;
      }
      q[left] = target;
    }
  }
  return q.length;
};

/*
  对binary search 进行改造
*/
var maxEnvelopes = function (envelopes) {
  // Sort w ascending，宽度相等时，让高度大的在前面
  envelopes.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  const q = [];
  for (let i = 0; i < envelopes.length; ++i) {
    let left = 0,
      right = q.length,
      target = envelopes[i][1];
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (q[mid] >= target) right = mid;
      else left = mid + 1;
    }
    if (left >= q.length) {
      // 没有找到
      q.push(target);
    } else {
      q[left] = target;
    }
  }
  return q.length;
};
