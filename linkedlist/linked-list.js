class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class LinkedList {
  init() {
    // the first node called head node
    this.head = new Node("San Francisco", null);

    var nodeOakland = new Node("Oakland", null);
    this.head.next = nodeOakland;

    var nodeBerkeley = new Node("Berkeley", null);
    nodeOakland.next = nodeBerkeley; // the last node called tail node

    this.tail = new Node("Fremont", null);
    nodeBerkeley.next = this.tail;

    return this.head;
  }

  print(node) {
    var p = node;
    while (p != null) {
      // From the beginning to the end
      var data = p.getData();
      document.write(data + " -> ");
      p = p.next;
    }
    document.write("End<br><br>");
  }

  add(newNode) {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /*
    Bug: when insertPosition is 0
  */
  insert(insertPosition, newNode) {
    var p = this.head;
    var i = 0; // Move the node to the insertion position
    while (p.next != null && i < insertPosition - 1) {
      p = p.next;
      i++;
    }
    newNode.next = p.next; // newNode next point to next node
    p.next = newNode; // current next point to newNode
  }

  /*
    Bug: when insertPosition is 0
  */
  remove(removePosition) {
    var p = this.head;
    var i = 0;
    // Move the node to the previous position that was deleted
    while (p.next != null && i < removePosition - 1) {
      p = p.next;
      i++;
    }
    var temp = p.next; // Save the node you want to delete
    p.next = p.next.next; // Previous node next points to next of delete the node
    temp.next = null;
  }
}

//////////////////////testing////////////////////
var linkedList = new LinkedList();
var head = linkedList.init();
linkedList.print(head);

linkedList.add(new Node("Walnut", null));
linkedList.print(head);
