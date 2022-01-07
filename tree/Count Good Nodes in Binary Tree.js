/*
1448. Count Good Nodes in Binary Tree

https://leetcode.com/problems/count-good-nodes-in-binary-tree/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  // node.val > maxVal in the path
  const dfs = (node, maxVal) => {
    if (node == null) return 0;
    return (
      dfs(node.left, Math.max(maxVal, node.val)) +
      dfs(node.right, Math.max(maxVal, node.val)) +
      (node.val >= maxVal ? 1 : 0)
    );
  };
  
  return dfs(root, Number.MIN_SAFE_INTEGER);
};
