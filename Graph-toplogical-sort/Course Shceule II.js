/*

210. Course Schedule II
https://leetcode.com/problems/course-schedule-ii/
*/
/*
  BFS 

*/

var findOrder = function (numCourses, prerequisites) {
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
  const order = [];  
  // BFS
  while (queue.length) {
    const node = queue.shift();
    order.push(node)
    // reduce neighbour rank
    graph[node].forEach((neigh) => {
      indegree[neigh]--;
      // push node with no dependceny( rank ==0 )
      if (indegree[neigh] === 0) {
        queue.push(neigh);
      }
    });
  }
  if(order.length != numCourses)
    return []
  return order;
};

/*

    https://www.youtube.com/watch?v=Qqgck2ijUjU&ab_channel=HuaHua

    Time O(V+E) ~ O(V^2)
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from(Array(numCourses), () => []);

  // u depend on v, u need v first, graph is v to u
  for (const pair of prerequisites) {
    graph[pair[1]].push(pair[0]);
  }
  // create array(stack) to recode visiting status
  // states: 0 = unkonwn, 1 == visiting, 2 = visited
  const visit = new Array(numCourses).fill(0);
  const order = [];

  // return true if there is a cysle
  const dfs = (cur) => {
    if (visit[cur] == 1) return true;
    if (visit[cur] == 2) return false;

    visit[cur] = 1; // 标记当前node 为 visiting

    for (const neighbour of graph[cur]) {
      if (dfs(neighbour)) return true;
    }

    visit[cur] = 2; // deepest stack, no neighbour
    // Construct the path
    order.push(cur);  
    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (dfs(i)) return [];
  }

  return order.reverse();
};

/*
https://www.youtube.com/watch?v=Akt3glAwyfY&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=3&ab_channel=NeetCode

*/

var findOrder = function (numCourses, prerequisites) {
  const graph = new Map();

  for (const [cource, prerequisite] of prerequisites) {
    if (!graph.has(cource)) {
      graph.set(cource, []);
    }
    graph.get(cource).push(prerequisite);
  }
  // states: 0 = unvisited, 1 == visiting, 2 = visited
  const visit = new Array(numCourses).fill(0);
  const order = [];

  const dfs = (cource) => {
    if (visit[cource] == 1) return true;
    if (visit[cource] == 2) return false;

    visit[cource] = 1; // 标记当前node 为 visiting

    if (graph.has(cource)) {
      for (const prerequisite of graph.get(cource)) {
        if (dfs(prerequisite)) return true; // find cycle
      }
    }

    visit[cource] = 2; // deepest stack, no neighbour
    order.push(cource);
    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (dfs(i)) return [];
  }
  return order;
};



