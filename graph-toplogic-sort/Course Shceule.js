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
  const indegree = Array(numCourses).fill(0);
  
  // u depend on v, u need v first, graph is v to u
  for (const [u, v] of prerequisites) {
    //graph[pair[1]].push(pair[0]);
    graph[v].push(u);
    indegree[u]++;
  }

  const queue = [];
  // push node with no dependceny( rank ==0 )
  indegree.forEach((degree, i) => {
    if (degree === 0) {
      queue.push(i);
    }
  });

  // BFS
  while (queue.length) {
    const node = queue.shift();
    numCourses--;
    // reduce neighbour rank
    graph[node].forEach((neigh) => {
      indegree[neigh]--;
      // push node with no dependceny( rank ==0 )
      if (indegree[neigh] === 0) {
        queue.push(neigh);
      }
    });
  }
  return numCourses === 0;
};
