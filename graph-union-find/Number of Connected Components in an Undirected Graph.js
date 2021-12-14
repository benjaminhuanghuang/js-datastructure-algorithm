/*

323. Number of Connected Components in an Undirected Graph

https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

*/

/*
https://www.youtube.com/watch?v=8f1XPm4WOUc&ab_channel=NeetCode

*/


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var countComponents = function (n, edges) {
  const parents = Array.from({ length: edges.length}, (v, i) => i);
  const ranks = Array.from({ length: edges.length}, () => 1);

  const find = (n) => {
    let parent = n;
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

  let count = n;
  for (const [n1, n2] of edges) {
    if (union(n1, n2)) {
      count--;
    }
  }
  return count;
 }