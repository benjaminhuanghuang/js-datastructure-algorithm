/*
[1]
[1][1]
*/
var generate = function(numRows) {
  if (numRows < 1) return [];
  let res = [];
  for (let r = 0; r < numRows; i++) {
    let newRow = [];
    for (let c = 0; c <= r; c++) {
      if (r == 0) newRow.push(1);
      else {
        if (c == 0 || c == r) 
          newRow.push(1);
        else 
          newRow.push(res[r - 1][c - 1] + res[r - 1][c]);
      }
    }
    res.push(newRos);
  }
};
