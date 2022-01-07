/*
426. Convert Binary Search Tree to Sorted Doubly Linked List

https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
https://wentao-shao.gitbook.io/leetcode/binary-tree/426.convert-binary-search-tree-to-sorted-doubly-linked-list

Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor 
pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the 
first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the 
tree node should point to its predecessor, and the right pointer should point to its successor. 
You should return the pointer to the smallest element of the linked list.



*/
class Node {
  

}
/*
  BST, 优先考虑 in-order
*/
/**
 * treeToDoublyList
 *
 * @param root: root of a tree
 * @return: head node of a doubly linked list
 */
function treeToDoublyList(root) {

  // prev is very importent!
  const inorder = (curr)=>{
    if (curr == null) return;
    inorder(curr.left);

    prev.right = curr;
    curr.left = prev;
    prev = cur;

    inorder(curr.right);
  }

  if(root == null) {
    return null;
  }
  let prev = null;
  const dummy = new Node(0, null, null);
  prev = dummy;

  inorder(root);
  // connect head and tail
  prev.right = dummy.right;
  dummy.right.left = prev;
  return dummy.right;
}
