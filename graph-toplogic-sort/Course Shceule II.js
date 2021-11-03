/*

210. Course Schedule II
https://leetcode.com/problems/course-schedule-ii/
*/


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

  const dfs_check_cycle = (cur) => {
    if (visit[cur] == 1) return true;
    if (visit[cur] == 2) return false;

    visit[cur] = 1; // 标记当前node 为 visiting

    for (const neighbour of graph[cur]) {
      if (dfs_check_cycle(neighbour)) return true;
    }

    visit[cur] = 2;   // deepest stack, no neighbour
    order.push(cur);
    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (dfs_check_cycle(i)) return [];
  }

  return order.reverse();
};
