/*
437. Path Sum III

https://leetcode.com/problems/path-sum-iii/

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards 
(traveling only from parent nodes to child nodes).
 */

/*
  need a helper function to count the number of path of each node
*/
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
  if (!root) return 0;

  const numberOfPaths = (root, sum) => {
    if (!root) return 0;
    sum -= root.val;
    return (sum == 0 ? 1 : 0) + numberOfPaths(root.left, sum) + numberOfPaths(root.right, sum);
  };

  return numberOfPaths(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
