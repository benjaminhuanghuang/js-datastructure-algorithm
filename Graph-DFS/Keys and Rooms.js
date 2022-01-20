/*
841. Keys and Rooms

Medium

https://leetcode.com/problems/keys-and-rooms/
*/

/*
  http://zxi.mytechroad.com/blog/graph/leetcode-841-keys-and-rooms/

  Solution: DFS, 遍历所有节点
    Time complexity: O(V + E)
    Space complexity: O(V)
*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const dfs = (cur) => {
    if (visited.has(cur)) return;
    visited.add(cur);
    for (const neighbour of rooms[cur]) {
      dfs(next);
    }
  };

  dfs(0);

  return visited.size == rooms.length;
};
