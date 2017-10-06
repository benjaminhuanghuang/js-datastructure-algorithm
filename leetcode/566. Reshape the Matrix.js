/*
566. Reshape the Matrix
*/
var matrixReshape = function(nums, r, c) {
  let rows = nums.length;
  let cols = nums[0].length;

  if (r * c > rows * cols) return nums;

  let res = new Array(r);
  for (let i = 0; i < r; i++) {
    res[i] = new Array(c);
    for (let j = 0; j < c; j++) {
      let k = i * c + j;
      res[i][j] = nums[parseInt(k / cols)][k % cols];
    }
  }
  return res;
};
