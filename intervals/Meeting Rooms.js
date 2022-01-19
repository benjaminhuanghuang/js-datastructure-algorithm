/*
252. Meeting Rooms

https://leetcode.com/problems/meeting-rooms/

https://ttzztt.gitbooks.io/lc/content/sort/meeting-rooms.html

determine if a person could attend all meetings.
*/

function canAttendMeetings(intervals) {
  // sort by start
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    // find overlap
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return maxCount;
}
