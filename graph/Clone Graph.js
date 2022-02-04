/*
133. Clone Graph

Medium

https://leetcode.com/problems/clone-graph/

[Uber]
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/*
Solution: DFS clone + oldToNew Map

https://www.youtube.com/watch?v=mQeF6bN8hMk&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=5&ab_channel=NeetCode

O(E+V)
*/

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node == null) return node;
  const oldToNew = new Map();

  const dfs_clone = (node) => {
    if (oldToNew.has(node)) {
      // cloned
      return oldToNew.get(node);
    }

    const copy = new Node(node.val);
    oldToNew.set(node, copy);
    for (const nei of node.neighbors) {
      copy.neighbors.push(dfs_clone(nei));
    }
    return copy;
  };

  return dfs_clone(node);
};
