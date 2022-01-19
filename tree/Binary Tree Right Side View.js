/*
  199. Binary Tree Right Side View

  https://leetcode.com/problems/binary-tree-right-side-view/

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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if(!root) return [];

    const q=[root];
    const res = [];
    while(q.length > 0)
    {
        let size = q.length;
        // collect the right most element 
        res.push(q[q.length-1].val);
        while(size > 0){
           const node = q.shift();
           if(node.left){
             q.push(node.left);
           } 
           if(node.right) {
             q.push(node.right);
           }
           size--;
        }
    }
    return res;
};