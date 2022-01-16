/*
551. Student Attendance Record I	

Easy

https://leetcode.com/problems/student-attendance-record-i/

'A': Absent.
'L': Late.
'P': Present.
*/

/*
Time complexity: O(n)

Space complexity: O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let a = 0;
  let l = 0;
  for (const c of s) {
    if (c == "A") ++a;
    if (c == "L") ++l;
    else l = 0;

    if (a > 1 || l > 2) {
      return false;
    }
  }
  return true;
};
