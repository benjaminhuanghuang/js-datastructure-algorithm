/*
116. Populating Next Right Pointers in Each Node

Level: Medium

https://leetcode.com/problems/populating-next-right-pointers-in-each-node

Perfect binary tree

Follow-up: You may only use constant extra space.
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/*
  prev.next = curr
*/
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root == null) return root;

  const q = [root];

  while (q.length > 0) {
    let size = q.length;
    // 重点
    let prev = null;
    while (size--) {
      const curr = q.shift();
      if (prev) {
        prev.next = curr;
      }
      prev = curr;
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
  }
  return root;
};

/*
  Space O(1)
  https://www.youtube.com/watch?v=YNu143ZN4qU

  难点： 如何把左子树最右边的node和右子树最左边的node连接起来

*/
var connect = function (root) {
  if (!root || !root.left) return root;
  root.left.next = root.right;

  // 把左子树最右边的node和右子树最左边的node连接起来， need Perfect binary tree
  if (root.next) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
};
