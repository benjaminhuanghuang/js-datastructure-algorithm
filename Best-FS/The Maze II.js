/*

505. The Maze II

Medium

https://leetcode.com/problems/the-maze-ii/
https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/solutions-501-550/505-the-maze-ii.html
*/

/*

BFS +  distance array
*/
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
function shortestDistance(maze, start, destination) {
  const rows = maze.length;
  const cols = maze[0].length;

  const distance = Array.from(Array(rows), () => Array(cols).fill(Number.MAX_SAFE_INTEGER));

  const q = [start];
  distance[start[0]][start[1]] = 0;

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const dir of [
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 0],
    ]) {
      const nRow = row + dir[0];
      const nCol = col + dir[1];
      let count = 0;

      while (canRoll(maze, nRow + dir[0], nCol + dir[1])) {
        nRow += dir[0];
        nCol += dir[1];
        count++;
      }

      // Update the distance[][], and use to check if a position is visited or not
      if (distance[row][col] + count < distance[nRow][nCol]) {
        distance[nRow][nCol] = distance[row][col] + count;
        queue.push([nRow, nCol]);
      }
    }
  }
  const ans = distance[destination[0]][destination[1]];
  if (ans == Number.MAX_SAFE_INTEGER) return -1;
  return ans;
}

function canRoll(maze, row, col) {
  const rows = maze.length;
  const cols = maze[0].length;
  return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] == 0;
}
