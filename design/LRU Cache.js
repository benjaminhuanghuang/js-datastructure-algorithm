/*
146. LRU Cache
https://leetcode.com/problems/lru-cache/

Least Recently Used (LRU) cache
The functions get and put must each run in O(1) average time complexity.

*/

/*
  hashtable + double linked list
  Least Recently Used node is the tail

  public interface : get(), put()
  helper funciton: remove(), insert/append()

  时间复杂度get O(1), set O(1)
  空间复杂度O(n) 
  
*/
var ListNode = function (key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};


/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.map = new Map();  // key, opinter to the list node
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    var node = this.map.get(key);
    this.remove(node);
    this.insert(node.key, node.val);
    return node.val;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.remove(this.map.get(key));
    this.insert(key, value);
  } else {
    if (this.length === this.capacity) {
      this.remove(this.head);
      this.insert(key, value);
    } else {
      this.insert(key, value);
      this.length++;
    }
  }
};
LRUCache.prototype.remove = function (node) {
  var prev = node.prev;
  var next = node.next;
  if (next) next.prev = prev;
  if (prev) prev.next = next;
  if (this.head === node) this.head = next;
  if (this.tail === node) this.tail = prev;
  this.map.delete(node.key);
};

// append to end
LRUCache.prototype.insert = function (key, val) {
  // Append the new node at the end
  var node = new ListNode(key, val);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.map.set(key, node);
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */