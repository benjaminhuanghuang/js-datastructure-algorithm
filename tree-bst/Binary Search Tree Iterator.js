/*

173. Binary Search Tree Iterator

Medium

https://leetcode.com/problems/binary-search-tree-iterator/

You may assume that next() calls will always be valid. 
That is, there will be at least a next number in the in-order traversal when next() is called.

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
 */
var BSTIterator = function(root) {
  this.stack = [];
  
  while(root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let result = 0;
  if(this.stack.length>0)
  {
      let node = this.stack.pop();
      result = node.val;
      // find the next node in the right sub tree
      node = node.right;
      while(node)
      {
          this.stack.push(node);
          node = node.left;
      }
  }
  return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */