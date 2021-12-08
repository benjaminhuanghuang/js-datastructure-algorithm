/*
563. Binary Tree Tilt

https://leetcode.com/problems/binary-tree-tilt/
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
var findTilt = function (root) {
  let tilt_sum = 0;
  if (root == null) return 0;

  function iterator(root) {
    if (root == null) return 0;
    let leftSum = iterator(root.left);
    let rightSum = iterator(root.right);
    tilt_sum += Math.abs(leftSum - rightSum);
    return root.val + leftSum + rightSum;
  }

  iterator(root);
  return ans;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
let res = findTilt(root);
console.log(res);
