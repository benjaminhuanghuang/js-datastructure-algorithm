/* 
Binary Search Tree:
1. If the left subtree of any node is not empty, the value of all nodes on the left subtree is less than the value of its root node;
2. If the right subtree of any node is not empty, the value of all nodes on the right subtree is greater than the value of its root node;
3. The left subtree and the right subtree of any node are also binary search trees

In-order traversal : left subtree -> root node -> right subtree get a sorted values

*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  getData() {
    return this.data;
  }
}

class BinaryTree {
  getRoot() {
    return this.root;
  } 
  
  // In-order traversal binary search tree
  inOrder(root) {
    if (root == null) {
      return;
    }
    this.inOrder(root.left); // Traversing the left subtree
    document.write(root.getData() + ", ");
    this.inOrder(root.right); // Traversing the right subtree
  }

  // Insert new data to node
  insert(node, newData) {
    if (this.root == null) {
      this.root = new Node(newData, null, null);
      return;
    }
    var compareValue = newData - node.getData(); //Recursive left subtree, continue to find the insertion position
    if (compareValue < 0) {
      if (node.left == null) {
        node.left = new Node(newData, null, null);
      } else {
        this.insert(node.left, newData);
      }
    } else if (compareValue > 0) {
      ////Recursive right subtree, continue to find the insertion position
      if (node.right == null) {
        node.right = new Node(newData, null, null);
      } else {
        this.insert(node.right, newData);
      }
    }
  }
}


//////////////////////testing////////////////////
var binaryTree = new BinaryTree(); //Constructing a binary search tree
binaryTree.insert(binaryTree.getRoot(), 60);
binaryTree.insert(binaryTree.getRoot(), 40);
binaryTree.insert(binaryTree.getRoot(), 20);
binaryTree.insert(binaryTree.getRoot(), 10);
binaryTree.insert(binaryTree.getRoot(), 30);
binaryTree.insert(binaryTree.getRoot(), 50);
binaryTree.insert(binaryTree.getRoot(), 80);
binaryTree.insert(binaryTree.getRoot(), 70);
binaryTree.insert(binaryTree.getRoot(), 90);
document.write("<br> In-order traversal binary search tree <br>");
binaryTree.inOrder(binaryTree.getRoot());
