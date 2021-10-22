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

class DoubleLinkList {
  init() {
    this.head = new Node("San Francisco");
    this.head.prev = null;
    this.head.next = null;
    var nodeOakland = new Node("Oakland");
    nodeOakland.prev = this.head;
    nodeOakland.next = null;
    this.head.next = nodeOakland;
    var nodeBerkeley = new Node("Berkeley");
    nodeBerkeley.prev = nodeOakland;
    nodeBerkeley.next = null;
    nodeOakland.next = nodeBerkeley;

    // Set the tail
    this.tail = new Node("Fremont");
    this.tail.prev = nodeBerkeley;
    this.tail.next = null;
    nodeBerkeley.next = this.tail;
    return this.head;
  }
  print(node) {
    var p = node;
    var end = null;
    // from start to end
    while (p != null) {
      var data = p.getData();
      console.log(data + " -> ");
      end = p;
      p = p.next;
    }
    console.log("End <br><br>");

    // from edn to start
    p = end;
    while (p != null) {
      var data = p.getData();
      console.log(data + " -> ");
      p = p.prev;
    }
    console.log("Start<br><br>");
  }

  add(newNode) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
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
    newNode.prev = p;
    newNode.next.prev = newNode;
  }

  remove(removePosition) {
    var p = this.head;
    var i = 0; // Move the node to the previous node  that was deleted
    while (p.next != null && i < removePosition - 1) {
      p = p.next;
      i++;
    }
    var temp = p.next; // Save the node you want to delete
    p.next = p.next.next;
    p.next.prev = p;
    temp.next = null; // Set the delete node next to null
    temp.prev = null; // Set the delete node prev to null
  }
}

//////////////////////testing////////////////////

var doubleLinkList = new DoubleLinkList();
var head = doubleLinkList.init();
doubleLinkList.add(new Node("Walnut"));
doubleLinkList.print(head);
