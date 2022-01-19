/*
  297. Serialize and Deserialize Binary Tree

  https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
   
  // the helper function
  const preorder = (root) => {
    if (root === null) {
      res.push("#");
      return;
    }
    res.push(root.val);
    preorder(root.left, res);
    preorder(root.right, res);
  };

  preorder(root, res);

  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(",");

  let index = 0;
  const helper = (data) => {
    if (index > data.length || data[index] === "#") {
      return null;
    }
    // value = data[index]
    let root = new TreeNode(parseInt(data[index]));

    index++;
    root.left = helper(data);
    
    index++;
    root.right = helper(data);
    
    return root;
  };
  
  return helper(arr);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
