/*
337. House Robber III

https://leetcode.com/problems/house-robber-iii/

给你一棵二叉树，不能同时取两个相邻的节点(parent/child)，问最多能取得的节点的值的和是多少。
*/

/*
Solution: Recursion memorization 

Time complexity: O(n^2)

Space complexity: O(n)
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
const mem = new Map();

var rob = function (root) {
  if (root == null) return 0;
  if (mem.has(root)) return mem.get(root);
  const val = root.val;
  const ll = root.left ? rob(root.left.left) : 0;
  const lr = root.left ? rob(root.left.right) : 0;
  const rl = root.right ? rob(root.right.left) : 0;
  const rr = root.right ? rob(root.right.right) : 0;
  const ans = Math.max(val + ll + lr + rl + rr, rob(root.left) + rob(root.right));
  mem.set(root, ans);
  return ans;
};
