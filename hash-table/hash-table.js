/*
Hash Table:
Access by mapping key => values in the table.
For example, mapping rule key % 4

Array + Node
*/

class Node {
  constructor(key, value, hash, next) {
    this.key = key;
    this.value = value;
    this.hash = hash;
    this.next = next;
  }
  getKey() {
    return this.key;
  }
  setKey(key) {
    this.key = key;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }

  getHash() {
    return this.hash;
  }
  setHash(hash) {
    this.hash = hash;
  }
}

/*

*/
class Hashtable {
  constructor() {
    this.capacity = 16;
    this.table = new Array(this.capacity);
    this.size = 0;
  }

  size() {
    return this.size;
  }
  isEmpty() {
    return this.size == 0 ? true : false;
  }
  hash(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  } 
  
  //Calculate the hash value according to the key hash algorithm
  hashCode(key) {
    var avg = (this.hash(key) * (Math.pow(5, 0.5) - 1)) / 2; //hash policy for middle-square method
    var numeric = avg - Math.floor(avg);
    return parseInt(Math.floor(numeric * this.table.length));
  }
  
  put(key, value) {
    if (key == null) {
      throw new IllegalArgumentException();
    }
    var hash = this.hashCode(key);
    var newNode = new Node(key, value, hash, null);
    var node = table[hash];
    while (node != null) {
      if (node.getKey().equals(key)) {
        node.setValue(value);
        return;
      }
      node = node.next;
    }
    newNode.next = this.table[hash];
    this.table[hash] = newNode;
    this.size++;
  }
  get(key) {
    if (key == null) {
      return null;
    }
    var hash = this.hashCode(key);
    var node = this.table[hash];
    while (node != null) {
      //Get value according to key
      if (node.getKey() == key) {
        return node.getValue();
      }
      node = node.next;
    }
    return null;
  }
} 

//////////////////////testing////////////////////
var table = new Hashtable();
table.put("a" , "apple")