/*
1189. Maximum Number of Balloons

Easy

https://leetcode.com/problems/maximum-number-of-balloons

[Tesla]
*/
/*
  可以形成balloon的个数由 text中 b, a, ll, oo, n的最小个数决定
*/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const textCount = new Map();
  for (const c of text) {
    textCount.set(c, (textCount.get(c) || 0) + 1);
  }
  const balloonCount = new Map();
  for (const c of "balloon") {
    balloonCount.set(c, (balloonCount.get(c) || 0) + 1);
  }
  let ans = text.length;
  for (const [c, i] of balloonCount) {
    ans = Math.min(ans, Math.floor((textCount.get(c) || 0) / i));
  }
  return ans;
};
