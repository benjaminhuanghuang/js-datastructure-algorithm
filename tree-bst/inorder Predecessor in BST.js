/*
Lintcode 915. Inorder Predecessor in BST

https://www.codeleading.com/article/98393519511/


/*
  BST 中 root.left一定小于root, root.right一定大于root
  中序 左中右 一定是递增序列

  所以p的前驱就是比p小的node
  所以p的前驱一定是p的左子结点 或者 p的左父结点

1 p的前驱是p的左子结点 p.val<=root.val
我们会一直遍历到p 并且会多root.left一次也就是刚好到p的前继
多root.left一次刚好使得 root=p.left pre=root

2 p的前驱是p的左父结点 p.val>root.val
pre = root
root = root.right 直到p.val=root.val
此时pre就为root的左父结点

*/
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderPredecessor = function (root, p) {
  let pre = null;
  while (root) {
    if (root.val >= p.val) {
      // 一直遍历到p 并且会多root.left一次也就是刚好到p的前继
      root = root.left;
    } else {
      //多root.left一次刚好使得 root=p.left
      pre = root;
      root = root.right;
    }
  }
  return pre;
};
