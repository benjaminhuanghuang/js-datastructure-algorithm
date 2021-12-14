/*

684. Redundant Connection

https://leetcode.com/problems/redundant-connection/
*/

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
  const find = (n) => {
    let parent = parents[n];
    while (parent != parents[parent]) {
      parents[parent] = parents[parents[parent]];
      parent = parents[parent];
    }
    return parent;
  };

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
