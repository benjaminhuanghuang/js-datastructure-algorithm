/*
110. Balanced Binary Tree

Easy

https://leetcode.com/problems/balanced-binary-tree/

[MS]
 */

/*
get height
Solution 1: O(nlogn)
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  const height = (root) => {
    if (!root) return 0;
    return Math.max(height(root.left), height(root.right)) + 1;
  };

  const left_height = height(root.left);
  const right_height = height(root.right);
  return Math.abs(left_height - right_height) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

/*
 O(n)
*/
var isBalanced = function (root) {
  if (!root) return true;
  let balanced = true;
  const height = (root) => {
    if (!root)
      return 0;
    const left_height = height(root.left);
    if (!balanced)
      return -1;
    const right_height = height(root.right, balanced);
    if (!balanced)
      return -1;
    if (abs(left_height - right_height) > 1)
    {
      balanced = false;
      return -1;
    }
    return max(left_height, right_height) + 1;
  }

  height(root);
  return balanced;
};
