/*
 
 
return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

https://leetcode.com/problems/non-overlapping-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 1. sort by start
  intervals.sort((i1, i2)=> i1[0] - i2[0]);

  // 
  let ans = 0;
  let prevEnd = intervals[0][1]

  for( let i =1; i < intervals.length; i++){
    const [start, end] =  intervals[0];
    if(start >= prevEnd){
      // no overlapping
      prevEnd = end;
    }
    else{
      ans +=1;  // remove one
      // keep the one has min end, 更不会和后面的overlap
      prevEnd = Math.min(end, prevEnd);
    }
  }
  return ans;
};
