/*
  652. Find Duplicate Subtrees
  
  https://leetcode.com/problems/find-duplicate-subtrees/
*/
/*
  Solution 1:
    对所有节点两两调用 areSameSubTree(r1, r2)
    areSameSubTree(r1, r2)的Time Complexity is O(N)
    总Time Complexity is： O(N^2) * O(N)

    Space complexity is O(N) 因为有N层

*/


/*
  Solution 1:
    Serialization

    Time O(N^2)
    Sapce O(N^2)
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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    
};