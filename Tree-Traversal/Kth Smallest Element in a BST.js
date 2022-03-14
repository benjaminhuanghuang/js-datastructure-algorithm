/*
  230. Kth Smallest Element in a BST

  https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const inorder = (root) => {
    if (!root) return -1;
    const x = inorder(root.left);
    if (k == 0) return x;
    // 每经过一个node, k--
    k--;
    if (k == 0) return root.val;
    return inorder(root.right);
  };

  return inorder(root);
};


/*
 Easer version
*/
var kthSmallest = function (root, k) {
  // return the smalles value
  const inorder = (root) => {
    if (!root) return -1;
    const x = inorder(root.left);
    if (k == 0) return x;
    if (k == 1) {
      k--;
      return root.val;
    }
    k--;
    return inorder(root.right);
  };

  return inorder(root);
};

/*
  Solution 2:

*/
var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;

  while (node) {
    stack.push(node);
    node = node.left;
  }
  let x = 1;
  while (stack.length > 0 && x <= k) {
    node = stack.pop();
    x++;
    let right = node.right;
    while (right) {
      stack.push(right);
      right = right.left;
    }
  }
  return node.val;
};


var kthSmallest_refactor = function (root, k) {
  const stack = [];
  let node = root;

  const pushLeftPath = (curr) =>{
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
  }

  pushLeftPath(node);

  let x = 1;
  while (stack.length > 0 && x <= k) {
    node = stack.pop();
    x++;
    let right = node.right;
    pushLeftPath(right);
  }
  return node.val;
};
