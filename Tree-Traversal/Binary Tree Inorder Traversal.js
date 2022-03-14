/*
94. Binary Tree Inorder Traversal

Easy

https://leetcode.com/problems/binary-tree-inorder-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal_Recursive = function (root) {
  const ans = [];

  const inOrder = (ans, root) => {
    if (root == null) return;
    inOrder(ans, root.left, ans);
    ans.push(root.val);
    inOrder(ans, root.right);
  };

  inOrder(ans, root);
  return ans;
};

var inorderTraversal_Iterative_better = function (root) {
  const ans = [];
  const stack = [];
  let curr = root;

  while (curr) {
    stack.push(curr);
    curr = curr.left;
  }

  while (stack.length > 0) {
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;

    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
  }
  return ans;
};

var inorderTraversal_Iterative_better_refactor = function (root) {
  const ans = [];
  const stack = [];
  let curr = root;

  const pushLeftPath = (curr) =>{
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
  }
  
  pushLeftPath(curr);
  while (stack.length > 0) {
    curr = stack.pop();
    ans.push(curr.val);

    curr = curr.right;
    pushLeftPath(curr);
  }
  return ans;
}

var inorderTraversal_Iterative = function (root) {
  const ans = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr);
    curr = curr.right;
  }
  return ans;
};
