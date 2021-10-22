class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.next = next;
  }
  getData() {
    return this.data;
  }
}
/*
    top
    size
*/
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // push to the end
  push(element) {
    if (this.top == null) {
      this.top = new Node(element);
    } else {
      var newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }
  
  // pop from end
  pop() {
    if (this.top == null) {
      return null;
    }
    var p = this.top;
    this.top = this.top.next; // top move down
    p.next = null;
    this.size--;
    return p;
  }

  size() {
    return this.size;
  }
} //////////////////////testing////////////////////
function print(stack) {
  document.write("Top ");
  var node = null;
  while ((node = stack.pop()) != null) {
    document.write(node.getData() + " -> ");
  }
  document.write("End <br>");
}
var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
print(stack);
