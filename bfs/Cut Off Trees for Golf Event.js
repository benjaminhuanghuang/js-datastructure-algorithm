/*
675. Cut Off Trees for Golf Event

从最矮的树开始砍

Hard

https://leetcode.com/problems/cut-off-trees-for-golf-event/
*/

/*

Time complexity: O(m^2n^2)

Space complexity: O(mn)

*/
/**
 * @param {number[][]} forest
 * @return {number}
 */
 var cutOffTree = function (forest) {
  const rows = forest.length;
  const cols = forest[0].length;

  // BFS helper, return steps from curr pos to target pos
  function BFS(currRow, currCol, targetRow, targetCol) {
    const visited = Array.from(Array(rows), () => Array(cols).fill(0));

    // {row, col}
    const q = [[currRow, currCol]];

    let steps = 0;
    while (q.length > 0) {
      let count = q.length;
      while (count--) {
        const [row, col] = q.shift();

        // Found the shortest path
        if (row == targetRow && col == targetCol) return steps;

        for (const dir of [
          [0, 1],
          [-1, 0],
          [0, -1],
          [1, 0],
        ]) {
          const nRow = row + dir[0];
          const nCol = col + dir[1];

          // Out of bound or unwalkable
          if (nRow < 0 || nRow == rows || nCol < 0 || nCol == cols || !forest[nRow][nCol] || visited[nRow][nCol]) continue;

          // Mark x, y as visited
          visited[nRow][nCol] = 1;
          q.push([nRow, nCol]);
        }
      }
      ++steps;
    }

    // Impossible to reach
    return -1;
  }
  // {height, row, col}
  const trees = [];
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (forest[row][col] > 1) {
        trees.push([forest[row][col], row, col]);
      }
    }
  }

  // sort trees by height
  trees.sort((t1, t2) => t1[0] - t2[0]);

  let currRow = 0;
  let currCol = 0;

  let total_steps = 0;

  // Move from current position to next tree to cut
  for (let i = 0; i < trees.length; ++i) {
    let targetRow = trees[i][1];
    let targetCol = trees[i][2];

    let steps = BFS(currRow, currCol, targetRow, targetCol);
    if (steps == -1) return -1;

    // Cut the tree, not necessary
    forest[targetRow][targetCol] = 1;

    total_steps += steps;

    currRow = targetRow;
    currCol = targetCol;
  }

  return total_steps;
};

