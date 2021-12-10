/*
1022. Sum of Root To Leaf Binary Numbers 

Easy

https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  // helper
  const sums = (root, sum) => {
    if (!root) return 0;
    sum = (sum << 1) | root.val;
    if (!root.left && !root.right) {
      return sum;
    }
    return sums(root.left, sum) + sums(root.right, sum);
  };
  return sums(root, 0);
};
