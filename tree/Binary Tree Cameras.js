/*
968. Binary Tree Cameras

https://leetcode.com/problems/binary-tree-cameras/submissions/

最少放几个相机可以 monitor all nodes of the tr
*/
/*


*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  let total = 0;
  /*
    return 0: Can't be covered
    1: put a camera here
    2: no camera, can be covered or null
    */
  const helper = (root) => {
    if (root == null) return 2;
    const left = helper(root.left);
    const right = helper(root.right);

    if (left == 0 || right === 0) {
      total += 1;
      return 1;
    }
    if (left == 2 && right === 2) {
      return 0;
    } else {
      return 2;
    }
  };

  if (helper(root) === 0) {
    total += 1;
  }
  return total;
};
