/*
  894. All Possible Full Binary Trees

  A full binary tree is a binary tree where each node has exactly 0 or 2 children.

  Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

  https://leetcode.com/problems/all-possible-full-binary-trees/
*/

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return [];
  if (n === 1) return [TreeNode(0)];

  const res = [];
  // use i nodes as left sub tree
  for (let i = 1; i < n; i += 2) {
    const j = n - 1 - i; // j nodes for the right sub tree
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(j);

    for (let l of left) {
      for (let r of right) {
        const root = new TreeNode(0);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }

  return res;
};

/*
  Memoization
*/
const amp = new Map();

var allPossibleFBT = function (n) {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode(0)];
  if (map.has(n)) {
    return map.get(n);
  }
  const res = [];
  // use i nodes as left sub tree
  for (let i = 1; i < n; i += 2) {
    const j = n - 1 - i;
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(j);

    for (let l of left) {
      for (let r of right) {
        const root = new TreeNode(0);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }
  map.set(n, res);
  return res;
};
