/*
979. Distribute Coins in Binary Tree

Medium

https://leetcode.com/problems/distribute-coins-in-binary-tree/

用最少的步数，使每个node上只有一个硬币
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

https://www.youtube.com/watch?v=zQqku1AXVF8&ab_channel=HuaHua

*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var distributeCoins = function(root) {
  let ans = 0;
  const balance = (root)=>{
    if (!root)
      return 0;
    // l, r 表示有多少硬币要传给root和从root拿走  
    const l = balance(root.left);
    const r = balance(root.right);
    ans += Math.abs(l) + Math.abs(r);
    // root 自己要占用一个硬币，因此要挪走 root.val - 1个硬币，
    return l + r + root.val - 1;
  }
  balance(root);
  return ans;
};