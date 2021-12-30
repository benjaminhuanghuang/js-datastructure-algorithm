/*

684. Redundant Connection

[Google]

https://leetcode.com/problems/redundant-connection/
*/

/*---------------------------------------------------------
Solution 1: DFS to check whether u, v are already connectd

Time Complexity O(N^2)

https://www.youtube.com/watch?v=4hJ721ce010&ab_channel=HuaHua

---------------------------------------------------------*/

var findRedundantConnection = function (edges) {
  const graph = new Map();

  // Time complexity O(N)
  const hasPath = (graph, start, end, visited) => {
    if (start == end) return true;

    visited.add(start);

    if (!graph.has(start) || !graph.has(end)) return false;

    for (const next of graph.get(start)) {
      if (visited.has(next)) continue;
      if (hasPath(graph, next, end, visited)) return true;
    }
    return false;
  };

  for (const [u, v] of edges) {
    if (hasPath(graph, u, v, new Set())) {
      return [u, v];
    }

    // Add u,v to graph
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push(v);

    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(v).push(u);
  }
  return [];
};

/*
Solution 2: Union Find
Time complexity O(Nlog*N) = O(N)

https://www.youtube.com/watch?v=4hJ721ce010&ab_channel=HuaHua
*/
var findRedundantConnection = function (edges) {
  const parents = new Array(edges.length + 1).fill(0);
  const sizes = new Array(edges.length + 1).fill(1);

  const find = (node, parents) =>{
    while( parents[node] != node) {
      // node.parent = node.parent.parent;
      parents[node] = parents[parents[node]];
      // node = node.parent
      node = parents[node];
    }
    return node;
  }

  for (const [u, v] of edges) {
    if (!parents[u]) parents[u] = u;
    if (!parents[v]) parents[v] = v;

    const pu = find(u, parents);
    const pv = find(v, parents);
    if (pu == pv) return [u, v];

    // always merge smaller set(pv) to larger set (pu)
    if (sizes[pu] > sizes[pv]) {
      parents[pv] = pu;
      sizes[pu] += sizes[pv];
    } else {
      parents[pu] = pv;
      sizes[pv] += sizes[pu];
    }
  }
  return [];
};

/*


https://www.youtube.com/watch?v=FXWRE67PLL0&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=12&ab_channel=NeetCode
*/
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parents = Array.from({ length: edges.length + 1 }, (v, i) => i);

  const ranks = Array.from({ length: edges.length + 1 }, () => 1);

  // find root id
  const find = (n) => {
    let parent = parents[n];
    while (parent != parents[parent]) {
      parents[parent] = parents[parents[parent]];
      parent = parents[parent];
    }
    return parent;
  };
  //
  const union = (n1, n2) => {
    p1 = find(n1);
    p2 = find(n2);
    if (p1 === p2) {
      return false;
    }
    if (ranks[p1] > ranks[p2]) {
      parents[p2] = p1;
      ranks[p1] += ranks[p2];
    } else {
      parents[p1] = p2;
      ranks[p2] += ranks[p1];
    }
    return true;
  };

  for (const [n1, n2] of edges) {
    if (!union(n1, n2)) {
      return [n1, n2];
    }
  }
  return [];
};
