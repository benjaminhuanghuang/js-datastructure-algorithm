/*
236. Lowest Common Ancestor of a Binary Tree

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
Time complexity: O(n)

Space complexity: O(h)

For a given root, recursively call LCA(root.left, p, q) and LCA(root.right, p, q)

if both returns a valid node which means p, q are in different subtrees, then root will be their LCA.
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //发现目标节点则通过返回值,标记该子树发现了某个目标结点
  if (root == null || root == p || root == q) return root;
  //查看左子树中是否有目标结点，没有为null
  const left = lowestCommonAncestor(root.left, p, q);
  //查看右子树是否有目标节点，没有为null
  const right = lowestCommonAncestor(root.right, p, q);
  //都不为空，说明做右子树都有目标结点，则公共祖先就是本身
  if (left && right) return root;
  return left ? left : right;
};
