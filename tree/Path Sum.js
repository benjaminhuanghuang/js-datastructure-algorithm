/*
112. Path Sum	

Easy

https://leetcode.com/problems/path-sum/
*/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  if (!root.left && !root.right)
      return root.val == sum;

  const rest = targetSum - root.val;
  return hasPathSum(root.left, rest) || hasPathSum(root.left, rest);
};
