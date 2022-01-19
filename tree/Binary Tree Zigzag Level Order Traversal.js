/*
103. Binary Tree Zigzag Level Order Traversal

https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  const res = [];

  if(root == null)
      return res;

  const q = [root];
  let left2right = true;
  while(q.length > 0)
  {
      let count = q.length;
      const layer = [];
      for(let i =0; i<count; i++) {
          const node = q.shift();
          layer.push(node.val);
          if(node.left)
              q.push(node.left);
          if(node.right)
              q.push(node.right);
      }
      if(!left2right)
      {
          layer.reverse()
      }
      res.push(layer);
      left2right = !left2right;
  }

  return res;
};