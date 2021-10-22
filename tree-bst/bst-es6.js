/* 
Binary Search Tree:
1. If the left subtree of any node is not empty, the value of all nodes on the left subtree is less than the value of its root node;
2. If the right subtree of any node is not empty, the value of all nodes on the right subtree is greater than the value of its root node;
3. The left subtree and the right subtree of any node are also binary search trees

In-order traversal : left subtree -> root node -> right subtree get a sorted values

Minimum value: The small value is on the left child node, as long as the recursion traverses the left child until be empty, the current node is the minimum node.
 
Maximum value: The large value is on the right child node, as long as the recursive traversal is the right child until be empty, the current node is the largest node


Operations:
    insert
    traveral
    delete
    min/max
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

  setData (val) {
      this.data = val;
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

  //Preorder traversal binary search tree
  preOrder(root) {
    if (root == null) {
      return;
    }
    document.write(root.getData() + ", ");
    this.preOrder(root.left); // Recursive Traversing the left subtree
    this.preOrder(root.right); // Recursive Traversing the right subtree
  } //Post-order traversal binary search tree

  postOrder(root) {
    if (root == null) {
      return;
    }
    this.postOrder(root.left); // Recursive Traversing the left subtree
    this.postOrder(root.right); // Recursive Traversing the right subtree
    document.write(root.getData() + ", ");
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

  //Minimum value
  searchMinValue(node) {
    if (node == null || node.getData() == 0) return null;
    if (node.left == null) {
      return node;
    } //Recursively find the minimum from the left subtree
    return this.searchMinValue(node.left);
  }

  //Maximum value
  searchMaxValue(node) {
    if (node == null || node.getData() == 0) return null;
    if (node.right == null) {
      return node;
    } //Recursively find the minimum from the right subtree
    return this.searchMaxValue(node.right);
  }

  /*
    Binary search tree delete node 3 cases
    1. If there is no child node, delete it directly
    2. If there is only one child node, the child node replaces the current node, and then deletes the current node.
    3. If there are two child nodes, replace the current node with the smallest node from the right subtree, 
       because the smallest node on the right is also larger than the value on the left.
    */
  remove(node, newData) {
    if (node == null) return node;
    var compareValue = newData - node.getData();
    if (compareValue > 0) {
      node.right = this.remove(node.right, newData);
    } else if (compareValue < 0) {
      node.left = this.remove(node.left, newData);
    } else {   // newData === node.getData() 
      if (node.left != null && node.right != null) { // node has two children, delete it
        //Find the minimum node of the right subtree to replace the current node
        node.setData(this.searchMinValue(node.right).getData());
        node.right = this.remove(node.right, node.getData());
      } else {  // node has one child, the child node replaces the current node, and then deletes the current node.
        node = node.left != null ? node.left : node.right;
      }
    }
    return node;
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
