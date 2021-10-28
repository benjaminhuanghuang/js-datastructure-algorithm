/*
    https://leetcode.com/problems/k-closest-points-to-origin/submissions/
*/


/*
    Solution : sort array
*/
var kClosest = function (points, k) {
  points.sort((p1, p2) => {
    return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];
  });

  return points.slice(0, k);
};
