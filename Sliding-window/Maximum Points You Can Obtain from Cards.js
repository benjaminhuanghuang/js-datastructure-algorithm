/*
1423. Maximum Points You Can Obtain from Cards

Level: Medium

https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards

[google]

*/

/*
  Brute force:   O(K^2)


  sliding window: O(K)
  use a 长度为 len-k 的 sliding window

*/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let l = 0;
  let r = cardPoints.length - k;

  let total = 0; // sum of the nums out of sliding window, it is the point at beginning
  for (let i = r; i < cardPoints.length; i++) {
    total += cardPoints[i];
  }

  let ans = total;
  while (r < cardPoints.length) {
    total += cardPoints[l] - cardPoints[r];
    ans = Math.max(ans, total);
    l++;
    r++;
  }
  return ans;
};
