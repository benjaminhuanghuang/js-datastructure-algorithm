/*
117. Populating Next Right Pointers in Each Node II

Level: Medium

https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii

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
  #116 的解法也可以用但是使用了 extra space
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
  You may only use constant extra space.
*/
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 平行扫描父节点同层的节点
  let p = root;
  while (p) {
    // curr 是下一层的起点
    const dummy = new Node();
    let curr = dummy;
    // one level
    while (p) {
      if (p.left) {
        curr.next = p.left;
        curr = curr.next;
      }
      if (p.right) {
        curr.next = p.right;
        curr = curr.next;
      }
      p = p.next; // 同层下一个node
    }
    // go to next level
    p = dummy.next;
  }
  return root;
};
