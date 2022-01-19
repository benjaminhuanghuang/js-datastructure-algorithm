/*
113. Path Sum II

Medium

https://leetcode.com/problems/path-sum-ii/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
  DFS backtracking
*/
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = [];
  const dfs = (root, sum, curr) => {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      if (root.val == sum) {
        // 注意要clone curr
        ans.push([...curr, root.val]);
      }
      return;
    }

    curr.push(root.val);
    const new_sum = sum - root.val;
    dfs(root.left, new_sum, curr);
    dfs(root.right, new_sum, curr);
    curr.pop();
  };

  dfs(root, targetSum, []);
  return ans;
};
