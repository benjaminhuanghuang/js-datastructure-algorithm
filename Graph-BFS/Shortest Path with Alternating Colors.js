/*
1129. Shortest Path with Alternating Colors

Medium

https://leetcode.com/problems/shortest-path-with-alternating-colors
*/

/*
  https://zxi.mytechroad.com/blog/graph/leetcode-1129-shortest-path-with-alternating-colors/
  路径的颜色要交替
*/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
 var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  // 1. build graph
  const edges_r =  Array(n).fill(0).map((a)=>new Set());
  const edges_b =  Array(n).fill(0).map((a)=>new Set());
    
  for (const e of redEdges) 
      edges_r[e[0]].add(e[1]);
  
  for (const e of blueEdges) edges_b[e[0]].add(e[1]);
  const visited_r = new Set();
  const visited_b = new Set();

  const ans = new Array(n).fill(-1);

  const q = []; // (node, color)
  q.push([0, 0]); // 0, 上一步是red
  q.push([0, 1]); // 0, 上一步是blue
  visited_r.add(0);
  visited_b.add(0);

  let steps = 0;
  //2. BFS，每次扩展一层，step+1
  while (q.length > 0) {
    let size = q.length;
     // console.log(ans, q)
    while (size--) {
      // 拿出 parent node以及颜色
      const [p, is_red] = q.shift();

      //ans[p] = ans[p] >= 0 ? Math.min(ans[p], steps) : steps;
      ans[p] = steps;
      const edges = is_red ? edges_b : edges_r;
      const visited = is_red ? visited_b : visited_r;
      for (const neighobur of edges[p]) {
        if (visited.has(neighobur)) continue;
        visited.add(neighobur);
        q.push([neighobur, 1 - is_red]); // 1 - is_red 反转颜色
      }
    }
    ++steps;
  }
  return ans;
};