/*

662. Maximum Width of Binary Tree
https://leetcode.com/problems/maximum-width-of-binary-tree/


*/

/*
    对二叉树节点进行标号，根节点标号为0；若某节点标号为c，则其左右孩子标号分别为2c, 2c + 1
    某层的宽度即为最右、最左节点标号之差+1
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (root === null) return 0;
  const leftPos = []; // index of the left node in each level ;

  const dfs = (n, index, level) => {
    if (!n) return 0;
    if (leftPos.length == level) leftPos.push(index);
    let ans = 1;
    ans = Math.max(ans, index - leftPos[level] + 1);
    ans = Math.max(ans, Math.max(dfs(n.left, 2 * index, level + 1), dfs(n.right, 2 * index + 1, level + 1)));

    return ans;
  };

  return dfs(root, 0, 0);
};

var widthOfBinaryTree = function(root) {
  if(root == null) return 0
  let leftPos = [];
  let width = 1;
  helper(root, 0, 0);
  return width;
  
  // 2n     -> left node where n is parent
  // 2n + 1 -> right node
  
  function helper(root, lvl=0, pos) {
      if(root == null) return;
      
      if(leftPos[lvl] == undefined) leftPos[lvl] = pos;
      else width = Math.max(width, pos - leftPos[lvl]+1);

      helper(root.left, lvl+1, pos*2);
      helper(root.right, lvl+1, pos*2 + 1);
  }
}