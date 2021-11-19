/*
  48. Rotate Image
  https://leetcode.com/problems/rotate-image/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  let layerNum = Math.floor(n / 2);
  for (let layer = 0; layer < layerNum; layer++)
  {
    let start = layer;
    let end = n - 1 - layer;

    for (let i = start; i < end; i++)
    {
      let offset = i - start;
      let temp = matrix[start][i]; // back the up layer
      // left to up
      matrix[start][i] = matrix[end - offset][start];
      // bottom to left
      matrix[end - offset][start] = matrix[end][end - offset];
      // right to bottom
      matrix[end][end - offset] = matrix[i][end];
      // up to right
      matrix[i][end] = temp;
    }
  }
};
