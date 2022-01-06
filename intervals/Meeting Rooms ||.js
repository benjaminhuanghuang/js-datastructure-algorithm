/*
  253. Meeting Rooms ||

  https://leetcode.com/problems/meeting-rooms-ii/

  https://www.lintcode.com/problem/919/

  给定一系列的会议时间间隔intervals，包括起始和结束时间[[s1,e1],[s2,e2],...] (si < ei)，找到所需的最小的会议室数量。
*/

/*
  Solution: How many overlap meetings

  https://www.youtube.com/watch?v=FdzJmTCVyJU&ab_channel=NeetCode
*/  
/**
 * minMeetingRooms
 *
 * @param intervals: an array of meeting time intervals
 * @return: the minimum number of conference rooms required
 */
function minMeetingRooms(intervals) {
  const starts = [];
  const ends = [];

  for (let [s, e] of intervals) {
    starts.push(s);
    ends.push(e);
  }
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let count = 0;
  let maxCount = 0;
  let s=0, e=0;
  while (s < intervals.length) {
    if (starts[s] < ends[e]) {
      s += 1;
      count += 1;
    } else {
      // starts[s] >= ends[e] mines one meeting is finised 
      e++;
      count -= 1;
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}


minMeetingRooms([[0,30],[5,10],[15,20]])