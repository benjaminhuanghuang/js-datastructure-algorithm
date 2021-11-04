/*
547. Number of Provinces

https://leetcode.com/problems/number-of-provinces/


Same as Firend Circles
*/

/*
  Solution : DFS

  Time O(N^2)
*/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  if (isConnected.length == 0) return 0;

  const n = isConnected.length;

  const visited = new Array(n).fill(0);

  let count = 0;

  const dfs = (curr) => {
    if (visited[curr]) return;

    visited[curr] = 1;

    for (let i =0;i < n ; i++)
    {
      if(isConnected[curr][i] && !visited[i]){
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }
};
