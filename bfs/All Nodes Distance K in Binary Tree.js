/*
863. All Nodes Distance K in Binary Tree

Given the root of a binary tree, the value of a target node target, and an integer k, 
return an array of the values of all nodes that have a distance k from the target node.

Medium

https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/


*/

/*--------------------------------------------------------------
https://zxi.mytechroad.com/blog/searching/leetcode-863-all-nodes-distance-k-in-binary-tree/
https://www.youtube.com/watch?v=o1siL8eKCos

Solution1 : Graph + BFS
Time complexity: O(n)
Space complexity: O(n)

Solution1 : Recursion
Time complexity: O(n)
Space complexity: O(n)

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const graph = new Map();

  function buildGraph(parent, child) {
    if (parent) {
      if (!graph.has(parent)) {
        graph.set(parent, []);
      }
      graph.get(parent).push(child);

      if (!graph.has(child)) {
        graph.set(child, []);
      }
      graph.get(child).push(parent);
    }
    if (child.left) buildGraph(child, child.left);
    if (child.right) buildGraph(child, child.right);
  }

  buildGraph(null, root);
  const ans = [];
  const seen = new Set([target]);
  const q = [target];
  let count = 0;
  while (q.length > 0 && count <= k) {
    let s = q.length;
    while (s--) {
      const node = q.shift();
      if (count == k) {
        ans.push(node.val);
      }
      if (graph.has(node)) {
        for (const child of graph.get(node)) {
          if (seen.has(child)) continue;
          q.push(child);
          seen.add(child);
        }
      }
    }
    ++count;
  }
  return ans;
};
