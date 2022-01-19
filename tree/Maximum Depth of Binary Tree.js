/*
 104. Maximum Depth of Binary Tree
  
 https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

/*

*/

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/*
  Solution 2
*/
var maxDepth = function (root) {
  if (!root) return 0;

  const depth = (node, level) => {
    if (!node) return level;

    const l = depth(node.left, level + 1);
    const r = depth(node.right, level + 1);
    return Math.max(l, r);
  };

  return depth(root, 0);
};
