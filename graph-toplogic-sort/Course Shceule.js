/*

207. Course Schedule

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from(Array(numCourses), () => []);
  // rank is in-degree
  const ranks = Array(numCourses).frill(0);
  // u depend on v, u need v first, graph is v to u
  for (const [u, v] of prerequisites) {
    graph[v].push(u);
    ranks[u]++;
  }

  const queue = [];
  // push node with no dependceny( rank ==0 )
  ranks.forEach((rank, i) => {
    if (rank === 0) {
      queue.push(i);
    }
  });

  // BFS
  while (queue.length) {
    const f = queue.shift();
    --numCourses;
    // reduce neighbour rank
    graph[f].forEach((neigh) => {
      --ranks[neigh];
      // push node with no dependceny( rank ==0 )
      if (ranks[neigh] === 0) {
        queue.push(neigh);
      }
    });
  }
  return numCourses === 0;
};
