/*

222. Count Complete Tree Nodes

https://leetcode.com/problems/count-complete-tree-nodes/

O(N)
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
https://www.youtube.com/watch?v=dtLIe1rHYPg&ab_channel=HuaHua

对于普通树
countNodes(root) {
  return 1 + countNodes(root.left) + countNodes(root.right)
}
height(root) {
  return 1 + max(height(root.left) + height(root.right))
}

Time = O(N) 每个node访问一次, Space = O(H) = O(LogN)


对于complete binary tree除了最后最后一层都是满的
2^(h-1) -1 < nodes < 2^h -1

*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
    if(root == null) return 0;

    // Time complexity O(H)
    const height = (root) =>{
      if(root == null) return 0;
      return 1 + height(root.left);
    }

    let l = height(root.left);
    let r = height(root.right);
    if( l === r) {
      return (1 << l) + countNodes(root.right)
    }
    else
    {
      return (1 << (l-1)) + countNodes(root.left);
    }
};