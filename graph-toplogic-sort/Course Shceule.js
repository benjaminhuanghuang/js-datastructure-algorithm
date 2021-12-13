/*

207. Course Schedule

https://leetcode.com/problems/course-schedule/
*/

/*
https://www.youtube.com/watch?v=EgI5nU9etnU&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=2&ab_channel=NeetCode
  DFS
*/


/*
  DFS check cycle
*/
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();

  // u depend on v, u need v first, graph is v to u
  for (const pair of prerequisites) {
    if (!graph.has(pair[1])) {
      graph.set(pair[1], []);
    }
    graph.get(pair[1]).push(pair[0]);
  }

  // create array(stack) to recode visiting status
  // states: 0 = unkonwn, 1 == visiting, 2 = visited
  const visit = new Array(numCourses).fill(0);

  const dfs_check_cycle = (cur, visit) => {
    if (visit[cur] == 1) return true;
    if (visit[cur] == 2) return false;

    visit[cur] = 1; // 标记当前node 为 visiting
    if (graph.has(cur)) {
      for (const neighbour of graph.get(cur)) {
        if (dfs_check_cycle(neighbour, visit)) return true;
      }
    }

    visit[cur] = 2;

    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (dfs_check_cycle(i, visit)) return false;
  }
  return true;
};

/*
  In degree
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
