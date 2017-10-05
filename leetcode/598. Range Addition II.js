/*
598. Range Addition II
*/

var maxCount = function(m, n, ops) {
  if (ops.length  <1)
    return m*n;
    
  let minM = minN = Number.MAX_SAFE_INTEGER;
  for (let i=0; i< ops.length ;i++)
  {
    minM = Math.min(minM, ops[i][0]);
    minN = Math.min(minN, ops[i][1]);
  }
  return minM  * minN;
};