/*

207. Course Schedule

*/

/*
  Hua Hua
  https://www.youtube.com/watch?v=M6SBePBMznU

  Fastes solution, DFS Topological sort 
  Finding cycles O(n^2) -> Topological sort O(N)
   [1,0] 表示有一条边 0->1

   // create directed graph
   // 因为编号是0-n， 可以用vector<vector>，否则要使用 unordered_map 
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from(Array(numCourses), () => []);

  // u depend on v, u need v first, graph is v to u
  for (const pair of prerequisites) {
    graph[pair[1]].push(pair[0]);
  }
  // create array(stack) to recode visiting status
  // states: 0 = unkonwn, 1 == visiting, 2 = visited
  const visit = new Array(numCourses).fill(0);

  const dfs_check_cycle = (cur, visit) => {
    if (visit[cur] == 1) return true;
    if (visit[cur] == 2) return false;

    visit[cur] = 1; // 标记当前node 为 visiting

    for (const neighbour of graph[cur]) {
      if (dfs_check_cycle(neighbour, visit)) return true;
    }

    visit[cur] = 2;

    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (dfs_check_cycle(i, visit)) return false;
  }
  return true;
};
