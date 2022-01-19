/*
987. Vertical Order Traversal of a Binary Tree

Hard

https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const m = new Map();

  const dfs = (node, x, y) => {
    if (node == null) {
      return;
    }

    if (!m.has(x)) {
      m.set(x, new Map());
      m.get(x).set(y, [node.val]);
    } else {
      if (!m.get(x).has(y)) {
        m.get(x).set(y, [node.val]);
      } else {
        m.get(x).get(y).push(node.val);
      }
    }
    dfs(node.left, x - 1, y + 1);
    dfs(node.right, x + 1, y + 1);
  };

  dfs(root, 0, 0);

  // sort the x
  const xList = [...m.keys()].sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < xList.length; i++) {
    const yList = [...m.get(xList[i]).keys()].sort((a, b) => a - b);
    let col = [];
    for (let j = 0; j < yList.length; j++) {
      const values = m.get(xList[i]).get(yList[j]); // it can be a list
      values.sort((a, b) => a - b);
      col = col.concat(values);
    }
    ans.push(col);
  }
  return ans;
};
