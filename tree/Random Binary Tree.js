/*
Implement a binary tree with a method getRandomNode() that returns a random node

https://www.youtube.com/watch?v=nj5jFhglw8U&ab_channel=BytebyByte

*/
function TreeNode(val, left, right, children) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.children = children;
}


function getRandomNode() {
  const randomCount = Math.random()* (root.children + 1);

  getRandoeNodeWithCount(root, randomCount)
}


function getRandoeNodeWithCount( curr, count) {
  if(count == childrend(curr.left)) return curr.val;
  if(count < childrend(curr.left)) return getRandomNode(curr.left, count);
  return getRandomNode(curr.right, count - childrend(curr.left) - 1);
}

function childrend(node) {
  if( node === null) return 0;
  return node.children + 1; 
}
