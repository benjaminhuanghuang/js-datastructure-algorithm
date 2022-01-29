/*
759. Employee Free Time

We are given a list schedule of employees, which represents the working time for each employee.
Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Hard

https://leetcode.com/problems/employee-free-time/
*/

/*
https://zxi.mytechroad.com/blog/geometry/leetcode-759-employee-free-time/

*/

function employeeFreeTime(schedule) {
  let all=[];
  for (const intervals of schedule)
    all = all.concat(intervals);
  // sort all intervals
  all.sort((a, b)=>{
    a[0] - b[0];
  });

  // find gab between end and start
  const ans=[];
  let end = all[0][1]
  for (const busy of all) {
    if (busy.start > end) 
      ans.push(end, busy.start);  
    end = Math.max(end, busy.end);
  }
  return ans;
}