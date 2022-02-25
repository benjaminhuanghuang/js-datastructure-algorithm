/*
  652. Find Duplicate Subtrees
  
  https://leetcode.com/problems/find-duplicate-subtrees/
*/
/*
  Solution 1:
    对所有节点 两两 调用 areSameSubTree(r1, r2)
    
    areSameSubTree(r1, r2)的Time Complexity is O(N)

    总Time Complexity is： O(N^2) * O(N)

    Space complexity is O(N) 因为有N层

*/  
function areSameTree(r1, r2){
  if(r1 == null && r2 == null){return true}
  if(r1 == null || r2 == null) {
    return false;
  }
  if(r1.val != v2.val) {
    return false;
  }

  return areSameTree(r1.left, r2.left) && areSameTree(r1.right, r2.right)
}

/*
https://www.youtube.com/watch?v=JLK92dbTt8k&ab_channel=HuaHua
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

/*
  Solution: serialization
  1. if n is null , ""
  2. "n.val, left sub tree, riht sub tree"

  用 map 计数
*/
var findDuplicateSubtrees = function (root) {
  const ans = [];
  const counts = {}; // string-> int, 子树出现的次数
  //
  const serialize = (root) => {
    if (!root) return "#";
    const subTree = root.val.toString() + "," + serialize(root.left) + "," + serialize(root.right);
    if (++counts[subTree] == 2) ans.push(root);
    return key;
  };
  serialize(root);
  return ans;
};
