/*
551. Student Attendance Record I
*/

var checkRecord = function(s) {
  let res = true;
  let hasA = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A") {
      if (hasA)
        return false;
      else
        hasA = true;
    }
    if (i >=2 && s[i] == "L" && s[i-1] == "L" && s[i-2] == "L") {
      return false;
    }
  }
  return true;
};
