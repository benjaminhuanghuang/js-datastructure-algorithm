/*
796. Rotate String

https://leetcode.com/problems/rotate-string/
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (goal.length != s.length) return false;
  return (goal + goal).includes(s);
};
