/*
  1162. As Far from Land as Possible

  https://leetcode.com/problems/as-far-from-land-as-possible/
*/

/*
  Solution: 
   BFS
    Put all land cells into a queue as source nodes and BFS for water cells, the last expanded one will be the farthest.
    
    Time compleixty: O(n^2)
    Space complexity: O(n^2)

    把所有的 land cell 放入一个队列
    把land cell 向外扩展一圈， 被波及的cell 标记为 2，同时把被波及的cell放入队列，扩展一圈，step++
    如果queue中还有cell，就说明还可以继续扩展
    
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const q = [];

  // Put all land cells into a queue
  for (let row = 0; row < rows; ++row) for (let col = 0; col < cols; ++col) if (grid[row][col] == 1) q.push([row, col]); // land

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let steps = 0;

  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const [row, col] = q.shift();
      for (const d of dirs) {
        const tx = col + d[0];
        const ty = row + d[1];
        if (tx < 0 || tx >= cols || ty < 0 || ty >= rows || grid[ty][tx] != 0) continue;
        grid[ty][tx] = 2;
        q.push([ty, tx]);
      }
    }
    ++steps;
  }
  return steps == 1 ? -1 : steps - 1;
};
