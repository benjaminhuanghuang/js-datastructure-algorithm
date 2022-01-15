/*

57. Insert Interval


https://leetcode.com/problems/insert-interval/
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // the intervals is sorted
  const res = [];

  // collect the intervals.end < newInterval.start
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      // newInterval 在 intervals[i] 前面
      res.push(newInterval);
      while (i < intervals.length) {
        res.push(intervals[i++]);
      }
      return res;
    } else if (newInterval[0] > intervals[i][1]) {
      // newInterval 在 intervals[i] 后面
      res.push(intervals[i]);
    } else {
      // newInterval overloap with intervals[i], expend newInterval
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
    }
  }
  // for loop 退出，说明 newInterval一直有overlap, 否则会在loop 中return
  res.push(newInterval);
  return res;
};
