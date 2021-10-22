class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class SingleCircleLink {
  init() {
    // the first node called head node
    this.head = new Node("A");
    this.head.next = null;

    var nodeB = new Node("B");
    nodeB.next = null;
    this.head.next = nodeB;

    var nodeC = new Node("C");
    nodeC.next = null;
    nodeB.next = nodeC;

    // the last node D called tail node
    this.tail = new Node("D");
    // link the tail to head
    this.tail.next = this.head;
    nodeC.next = this.tail;
  }
  print() {
    var p = this.head;

    // end
    do {
      var data = p.getData();
      document.write(data + " -> ");
      p = p.next;
    } while (p != this.head);

    var data = p.getData();
    document.write(data + "<br><br>");
  }

  insert(insertPosition, newNode) {
    var p = this.head;
    var i = 0; // Move the node to the insertion position
    while (p.next != null && i < insertPosition - 1) {
      p = p.next;
      i++;
    }
    newNode.next = p.next;
    p.next = newNode;
  }

  remove(removePosition) {
    var p = this.head;
    var i = 0;
    while (p.next != null && i < removePosition - 1) {
      p = p.next;
      i++;
    }
    var temp = p.next;
    p.next = p.next.next;
    temp.next = null;
  }
}
