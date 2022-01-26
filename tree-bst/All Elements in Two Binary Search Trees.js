/*
1305. All Elements in Two Binary Search Trees

Medium

https://leetcode.com/problems/all-elements-in-two-binary-search-trees
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
  inorder 生成两个array 再merge
*/
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
  const inorder = (root, arr) => {
    if (!root)
      return;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  };


  const t1=[];
  const t2=[];
  inorder(root1, t1);
  inorder(root2, t2);

  const all=[];
  let i = 0;
  let j = 0;
  while (all.length != t1.length + t2.length)
  {
    if (j == t2.length)
      all.push(t1[i++]);
    else if (i == t1.length)
      all.push(t2[j++]);
    else
      all.push(t1[i] < t2[j] ? t1[i++] : t2[j++]);
  }
  return all;
};