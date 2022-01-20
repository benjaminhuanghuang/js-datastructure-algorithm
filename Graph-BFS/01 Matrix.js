/*
542. 01 Matrix

Level: Medium

https://leetcode.com/problems/01-matrix
*/

/*
  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-542-01-matrix/
  Solution : BFS

    Start from all 0 cells and find shortest paths to rest of the cells.

    Time complexity: O(mn)

    Space complexity: O(mn)
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const q = [];
  const visited = Array.from(Array(rows), () => Array(cols).fill(0));
  const ans = Array.from(Array(rows), () => Array(cols).fill(0));

  // push all 0 cells to the queue
  for (let row = 0; row < rows; ++row)
    for (let col = 0; col < cols; ++col)
      if (matrix[row][col] == 0) {
        q.push([row, col]);
        seen[i][j] = 1;
      }
  
  // 从这些0cell开始一层一层向外扩展，每一层 step+1, 扩展到的cell标记为visited 
  let steps = 0;
  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const [row, col] = q.shift();

      ans[row][col] = steps;
      for (const dir of [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nCol = col + d[0];
        const nRow = row + d[1];
        if (nCol < 0 || nCol >= cols || nRow < 0 || nRow >= rows || visited[nRow][nCol]) continue;

        visited[nRow][nCol] = 1;
        q.push({ y, x });
      }
    }
    ++steps;
  }
 
  return ans;
};
