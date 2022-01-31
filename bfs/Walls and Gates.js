/*

286. Walls and Gates

-1 - A wall or an obstacle. 
0 - A gate. 
INF - Infinity means an empty room. 

Fill each empty room with the distance to its nearest gate.

Medium

https://leetcode.com/problems/walls-and-gates/
https://tenderleo.gitbooks.io/leetcode-solutions-/content/GoogleMedium/286.html
*/

/*
https://www.youtube.com/watch?v=e69C6xhiSQE&ab_channel=NeetCode
*/

function wallsAndGates(rooms) {
  const rows = rooms.length;
  const cols = rooms[0].length;

  const visited = Array.from(Array(rows), () => Array(cols).fill(0));

  const q = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rooms[r][c] == 0) {
        // is gate
        q.push([row, col]);
        visited[row][col] = 1;
      }
    }
  }

  const addRoom = (row, col) => {
    if (row < 0 || row == rows || col < 0 || col == cols || visited[row][col] || room[row][col] == -1) return;
    visited[row][col] = 1;
    q.push([row, col]);
  };
  
  let distance = 0;
  while (q.length > 0) {
    let count = q.length;
    for (let i = 0; i < count; i++) {
      const [row, col] = q.shift();
      rooms[row][col] = distance;

      addRoom(row + 1, c);
      addRoom(row - 1, c);
      addRoom(row, c + 1);
      addRoom(row, c - 1);
    }

    distance++;
  }
}
