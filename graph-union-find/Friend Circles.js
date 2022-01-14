
/*
花花酱 LeetCode 547. Friend Circles

https://zxi.mytechroad.com/blog/graph/leetcode-547-friend-circles/

There are N students in a class. Some of them are friends, while some are not. 
Their friendship is transitive in nature. 
For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. 
And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. 
If M[i][j] = 1, then the ithand jth students are direct friends with each other, otherwise not. 
And you have to output the total number of friend circles among all the students.


DFS 无向图求连通分量的数量

# 200. Number of Islands
# 547. Number of Provinces
*/

/*
  Time Complexity O(N^2)
  Space Complexity O(N)
*/
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  if (M.length == 0) {
    return 0;
  }
  const n = M.length;
  const visited = new Array(n).fill(0);
  let ans = 0;

  // 砍掉所有与curr有关联的节点，visited
  const dfs = (curr) => {
    if (visited[curr]) return;
    visited[curr] = 1;

    // Visit tall friends(neighbors)
    for (let i = 0; i < n; i++) {
      if (M[curr][i] && !visited[i]) {
        dfs(i);
      }
     }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) return;
    dfs(i);  
    ans++;  // for 每个non-visited i
  }
};

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  let numCircles = 0;
  const visited = new Set();
  M.forEach((row, i) => {
    if (visited.has(i)) return;
    numCircles++;
    const queue = row.map((x, i) => (x ? i : -1)).filter((x) => x > -1);
    while (queue.length > 0) {
      const f = queue.pop();
      if (!visited.has(f)) {
        visited.add(f);
        queue.push(...M[f].map((x, i) => (x ? i : -1)).filter((x) => x > -1));
      }
    }
  });
  return numCircles;
};
