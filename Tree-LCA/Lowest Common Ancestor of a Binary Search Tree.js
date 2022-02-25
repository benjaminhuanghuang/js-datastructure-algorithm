/*
235. Lowest Common Ancestor of a Binary Search Tree

Easy

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/
var lowestCommonAncestor = function(root, p, q) {
  if (root == null)
    return null;
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);

  return root;
};