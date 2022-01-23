/*
1376. Time Needed to Inform All Employees



Medium

https://leetcode.com/problems/time-needed-to-inform-all-employees

[Google]
*/


/*
  求 max path sum


*/
/*
  Solution: Build the graph + DFS

    Time complexity: O(n)
    Space complexity: O(n)
*/
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  // manager -> elployees
  // 这样写会导致错误，fill()会使用同一个reference，导致所有的节点相同
  //const graph = new Array(n).fill([]);
  const graph = new Array(n).fill(0).map((i) => []);
  for (let i = 0; i < n; ++i) {
    if (i != headID) {
      // manager[headId] is -1
      graph[manager[i]].push(i);
    }
  }
  const dfs = (cur) => {
    let time = 0; // max time of inform all employee of curr
    console.log(cur, graph[cur]);
    for (const employee of graph[cur]) {
      time = Math.max(time, dfs(employee));
    }
    return time + informTime[cur];
  };

  return dfs(headID);
};
/*
  Solution: Build the graph + BFS


*/

var numOfMinutes = function (n, headID, manager, informTime) {
  // manager -> elployees
  // 这样写会导致错误，fill()会使用同一个reference，导致所有的节点相同
  //const graph = new Array(n).fill([]);
  const graph = new Array(n).fill(0).map((i) => []);
  for (let i = 0; i < n; ++i) {
    if (i != headID) {
      // manager[headId] is -1
      graph[manager[i]].push(i);
    }
  }

  let ans = 0;
  const q = [[headID, 0]]; // [employee, time from head to current employee]

  while(q.length > 0){
    const [employee, time] = q.shift();
    for(const next of graph[employee]){
        ans = Math.max(ans, time + informTime[employee]);
        q.push([next, time + informTime[employee]])
    }
  }
  return ans;
};
