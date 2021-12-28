/*

1932. Merge BSTs to Create Single BST

https://leetcode.com/problems/merge-bsts-to-create-single-bst/
*/

/*
  https://www.youtube.com/watch?v=06m27qGkhPk&ab_channel=HuifengGuan

  1. Find the root
  Final BST 的 root node 只可能是 小BST的 root， 同时不能是小BST 的leaf node
  小BST的root node 必须是别的小BST的leaf node ，否则无法merge

  2. 小BST的root 只有个机会被merge一个leaf node

  3. keep valid the BST

  4. 是否所有小BST都被merge了


  [[5,3],[1,null,5],[4,2],[3,null,4]]
  [[2,1],[3,2,5],[5,4]]

  [[3,1],[1,null,2],[2,1]]

*/
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function (trees) {
  // used to find the finally root
  const nonRootNodes = new Set();
  // used to find the small BST to merge
  const valToRoot = new Map();
  // used to check all of small BST were merged
  const used = new Set();

  const findNonRootNodes = (node) => {
    if (node === null) return;
    nonRootNodes.add(node.val);
    findNonRootNodes(node.left);
    findNonRootNodes(node.right);
  };

  const build = (node, min, max) => {
    if (node == null) return null;
    if (node.val < min || node.val > max) throw new Error("Invalid");
    if (node.left || node.right) {
      node.left = build(node.left, min, node.val - 1);
      node.right = build(node.right, node.val + 1, max);
      return node;
    } else {
      // node is a leaf node
      if (valToRoot.has(node.val)) {
        // merge
        node = valToRoot.get(node.val);
        valToRoot.delete(node.val);
        used.add(node.val);
        node.left = build(node.left, min, node.val - 1);
        node.right = build(node.right, node.val + 1, max);
        return node;
      } else {
        // no leaf node to merge
        return node;
      }
    }
  };

  // 1. find root
  for (const node of trees) {
    findNonRootNodes(node.left);
    findNonRootNodes(node.right);
    valToRoot.set(node.val, node);
  }
  let count = 0;
  const n = trees.length;
  let root;
  for (let i = 0; i < n; i++) {
    if (!nonRootNodes.has(trees[i].val)) {
      root = trees[i];
      count++;
    }
  }
  if (count != 1) return null;

  // 2. Build and valide
  used.add(root.val);
  try {
    const newRoot = build(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    if (used.size == n) return newRoot;
    return null;
  } catch (e) {
    return null;
  }
};
