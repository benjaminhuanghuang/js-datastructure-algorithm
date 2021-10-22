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

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Insert / push
  offer(element) {
    if (this.head == null) {
      this.head = new Node(element);
      this.tail = this.head;
    } else {
      var newNode = new Node(element);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // pop from head
  poll() {
    var p = this.head;
    if (p == null) {
      return null;
    }
    this.head = this.head.next;
    p.next = null;
    p.prev = null;
    this.size--;
    return p;
  }

  size() {
    return this.size;
  }
}
