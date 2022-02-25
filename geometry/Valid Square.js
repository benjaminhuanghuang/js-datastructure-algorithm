/*
593. Valid Square

Level: Medium

https://leetcode.com/problems/valid-square
*/


/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
 var validSquare = function(p1, p2, p3, p4) {
  // distance between p1 and p2 
  const distSqr = (p1, p2) =>
  {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
  }
  const s = new Set();
  s.add(distSqr(p1, p2));
  s.add(distSqr(p1, p3)); 
  s.add(distSqr(p1, p4));
  s.add(distSqr(p2, p3));
  s.add(distSqr(p2, p4));
  s.add(distSqr(p3, p4));

  return !s.has(0) && s.size == 2;
};