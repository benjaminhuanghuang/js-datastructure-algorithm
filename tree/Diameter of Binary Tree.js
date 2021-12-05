/*
543. Diameter of Binary Tree

Level: Easy

https://leetcode.com/problems/diameter-of-binary-tree

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 

This path may or may not pass through the root.

 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
  let diameter = 0;

  const maxDepth = (root)=>
  {
    if (root == null)
      return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    diameter = Maht.max(diameter, left + right);  //diameter 是edge的数量而不是node的数量，因此不用 left + right + 1
    return 1 + Maht.max(left, right);
  }
  
  maxDepth(root);

  return diameter;
};