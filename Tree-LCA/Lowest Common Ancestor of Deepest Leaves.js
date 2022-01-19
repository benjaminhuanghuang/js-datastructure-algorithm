/*
1123. Lowest Common Ancestor of Deepest Leaves

Medium

https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

Given a rooted binary tree, find the lowest common ancestor of its deepest leaves.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
  check if a node whose sub tree contains all deepest leaves
  https://www.youtube.com/watch?v=DUXvcoEZJqw&ab_channel=HuifengGuan
*/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  const map = new Map(); // value -> depth
  let maxDepth = 0;
  let maxDepthCount = 0; // deepest leaves 有几个node
  let ans = null;

  // calculate maxDepth and val->depath
  const dfs = (node, depth) => {
    if (node == null) return;
    map.set(node.val, depth);
    maxDepth = Math.max(maxDepth, depth);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  //   check if a node whose sub tree contains all deepest leaves
  const dfs2 = (node) => {
    if (node == null) return 0;
    const self = map.get(node.val) == maxDepth ? 1 : 0;
    const left = dfs2(node.left);
    const right = dfs2(node.right);
    if (self + left + right == maxDepthCount && ans == null) {
      ans = node;
    }
    return self + left + right;
  };

  dfs(root, 1);
  for (const [val, depth] of map) {
    if (depth == maxDepth) {
      maxDepthCount++;
    }
  }
  dfs2(root);

  return ans;
};
