/*
490. The Maze

https://leetcode.com/problems/the-maze/


*/

/*
BFS 

https://www.youtube.com/watch?v=mojmDmZyuDc
*/
/**
 * @param {number[][]} maze
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
function isEscapePossilbe(maze, source, target) {
  const rows = maze.length;
  const cols = maze[0].length;

  const visited = Array.from(Array(rows), () => Array(cols).fill(0));
  const q = [source];

  while (q.length > 0) {
    const [row, col] = q.shift();
    visited[row][col] = 1;
    // check target
    if (row == target[0] && col == target[col]) return true;

    for (const dir of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      let nRow = row;
      let nCol = col;
      // 一直滚动
      while (isValid(row + dir[0], col + dir[1])) {
        nRow += dir[0];
        nCol += dir[1];
      }
      if (visited[nRow][nCol]) continue;
      q.push([nRow, nCol]);
    }
  }
  return false;
}

function isValid(maze, row, col) {
  const rows = maze.length;
  const cols = maze[0].length;
  return nRow >= 0 && nCol >= 0 && nRow < rows && nCol < cols && maze[row][col] == 0;
}

/*

DFS
*/
function isEscapePossilbe(maze, sourc, target) {}
