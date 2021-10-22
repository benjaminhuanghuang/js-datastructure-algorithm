class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class DoubleCircleLink {
  init() {
    // the first node called head node
    this.head = new Node("A");
    this.head.next = null;
    this.head.prev = null;
    var nodeB = new Node("B");
    nodeB.next = null;
    nodeB.prev = this.head;
    this.head.next = nodeB;
    var nodeC = new Node("C");
    nodeC.next = null;
    nodeC.prev = nodeB;
    nodeB.next = nodeC; // the last node called tail node
    this.tail = new Node("D");
    this.tail.next = this.head;
    this.tail.prev = nodeC;
    nodeC.next = this.tail;
    this.head.prev = this.tail;
  }
  print() {
    var p = this.head;
    do {
      var data = p.getData();
      console.log(data + " -> ");
      p = p.next;
    } while (p != this.head);
    var data = p.getData();
    console.log(data + "<br><br>");
    p = this.tail;
    do {
      data = p.getData();
      console.log(data + " -> ");
      p = p.prev;
    } while (p != this.tail);

    data = p.getData();
    console.log(data + "<br><br>");
  }

  insert(insertPosition, newNode) {
    var p = this.head;
    var i = 0; //Move the node to the insertion position
    while (p.next != null && i < insertPosition - 1) {
      p = p.next;
      i++;
    }
    newNode.next = p.next;
    p.next = newNode;
    newNode.prev = p;
    newNode.next.prev = newNode;
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
    p.next.prev = p;
    temp.next = null; //Set the delete node next to null
    temp.prev = null; // Set the delete node prev to null
  }
}

//////////////////////testing////////////////////
var doubleCircleLink = new DoubleCircleLink();
doubleCircleLink.init();
doubleCircleLink.print();
