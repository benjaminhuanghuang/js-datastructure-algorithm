/*
124. Binary Tree Maximum Path Sum

[Facebook]

https://leetcode.com/problems/binary-tree-maximum-path-sum/

# 687. Longest Univalue Path

# 543. Diameter of Binary Tree

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
  Solution
  人字形path 可以横跨整个树， 用helper() 计算以每个node为root点 人字形path sum

   人字形path sum = root.val + max(0, MS(root.left)) + max(0, MS(root.right)))

  https://zxi.mytechroad.com/blog/tree/leetcode-124-binary-tree-maximum-path-sum/

 

  Time O(N)   每个节点一次
  Space O(H)  树深度
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (!root) return 0;
  let ans = Number.MIN_SAFE_INTEGER;

  //返回人字形path的计算以每个node为root点 path sum = 左path + 右path + root.val
  const helper = (root) => {
    if (!root) return 0;
    const l = Math.max(0, helper(root.left));
    const r = Math.max(0, helper(root.right));

    const sum = l + r + root.val;

    ans = max(ans, sum);

    return Math.max(l, r) + root.val;
  };
  helper(root);

  return ans;
};

/*
https://www.youtube.com/watch?v=WicS0ANkAdY&t=1s&ab_channel=%E6%9D%A5Offer-LaiOffer

所有人字形path，可以分解为左path, 顶点, 右path
*/

var maxPathSum = function (root) {
  if (!root) return 0;
  let ans = Number.MIN_SAFE_INTEGER;
  const helper = (root) => {
    if (!root) return 0;
    const l = Math.max(0, helper(root.left));
    const r = Math.max(0, helper(root.right));

    const sum = l + r + root.val;

    ans = max(ans, sum);
    return Math.max(l, r) + root.val;
  };
  helper(root);

  return ans;
};
