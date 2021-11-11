/*
56. Merge Intervals

https://leetcode.com/problems/merge-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;

  // sort the intervals by the start
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  const result = [];
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      result.push([start, end]);
    } else {
      end = Math.max(end, intervals[i][1]);
    }
  }

  return result;
};

/*

*/
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;

  // sort the intervals by the start
  intervals.sort((i1, i2) => i1[0] - i2[0]);
  const result = [];
  for (const interval of intervals) {
    if (result.length === 0 || interval[0] > result[result.length - 1][1]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
    }
  }
  return result;
};
