/*
1377. Frog Position After T Seconds

Hard

https://leetcode.com/problems/frog-position-after-t-seconds/
*/
 

/*
https://zxi.mytechroad.com/blog/searching/leetcode-1377-frog-position-after-t-seconds/
key: if a node has children, the fog jumps to to children so the probability at current node 
will become 0.

Given an undirected tree consisting of n vertices numbered from 1 to n
tree实际上是有向的

Time complexity: O(n)
Space complexity: O(n)
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
 var frogPosition = function(n, edges, t, target) {
  const p = new Array(n + 1).fill(0);
  p[1] = 1.0;
  const g = new Array(n+1).fill(0).map((_)=>[]);

  for (const  e of edges) {
    g[e[0]].push(e[1]);
    g[e[1]].push(e[0]);
  }
  const visited = new Array(n + 1);
  visited[1] = 1;
  const q = [1];
  while (t--) {
    let size = q.length;      
    while (size--) {
      const cur = q.shift();
      let children = 0;
      for (const next of g[cur])
        if (!visited[next]) ++children;
      for (const next of g[cur])
        if (!visited[next]) {
          visited[next]=1;
          q.push(next);
          p[next] += p[cur] / children;
        }
      // key: fog jumps this node has children
      if (children > 0) {
        p[cur] = 0.0;
      }
    }
  }
  return p[target];
};
