/*
889. Construct Binary Tree from Preorder and Postorder Traversal

Medium

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
*/
/*
pre = [(root) (left-child) (right-child)]

post = [(left-child) (right-child) (root)]

private int getElementIndex(int[] array, int value) {
  for (int i = 0; i < array.length; i++) {
      if (array[i] == value)
          return i;
  }
  return -1;
}
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const prePostTreeBuilder = (preStart, preEnd, postStart, postEnd) => {
    if (preStart > preEnd) return null;

    const root = new TreeNode(preorder[preStart]);
    if (preStart == preEnd) return root;

    // value of left
    const leftVal = preorder[preStart + 1];
    let leftPostIndex;

    for (leftPostIndex = postStart; leftPostIndex <= postEnd; leftPostIndex++) {
      if (postorder[leftPostIndex] === leftVal) break;
    }

    const leftTreeSize = leftPostIndex - postStart;

    const preLeftStart = preStart + 1;
    const preLeftEnd = preLeftStart + leftTreeSize;
    const leftPostStart = postStart;
    const leftPostEnd = leftPostIndex;

    const preRightStart = preLeftEnd + 1;
    const preRightEnd = preEnd;
    const postRightStart = leftPostIndex + 1;
    const postRightEnd = postEnd - 1;

    root.left = prePostTreeBuilder(preLeftStart, preLeftEnd, leftPostStart, leftPostEnd);
    root.right = prePostTreeBuilder(preRightStart, preRightEnd, postRightStart, postRightEnd);

    return root;
  };

  return prePostTreeBuilder(0, preorder.length - 1, 0, postorder.length - 1);
};
