/*
  460. LFU Cache

  Hard
  
  https://leetcode.com/problems/lfu-cache/

  invalidate the least frequently used item before inserting a new item
*/

/*
https://zxi.mytechroad.com/blog/hashtable/leetcode-460-lfu-cache/

Solution 1: hashtable + balanceed search tree
O(LogCapacity)

Node {key, value, freq, tick}

less(n1, n2)
  if(n1.freq < n2.freq)
    return true
  if(n1.freq == n2.freq)  
    return n1.tick < n2.tick
  return false

每次踢掉最左子树的左节点
每次访问要update freq和tick， 从tree中移除node，再重新插入， Time Complexity is O(LogCapacity) 
*/

/*
https://zxi.mytechroad.com/blog/hashtable/leetcode-460-lfu-cache/

Solution 2: hashtable + double linked list
O(1)

Node {key, value, freq, freq list}

Each visit, move it from freq list to the front of freq + 1 list
每个list的head是最近访问过的node， tail是要被删除的node
用min_freq 来追踪要删除的node

最多只有C个ferq list
*/
class CacheNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.freq = 0;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.min_freq = 0;

  this.kv_map = new Map(); // key->cacheNode
  this.freq_map = new Map(); // freq-> list of keys,
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.kv_map.has(key)) {
    const node = this.kv_map.get(key);
    this.touch(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }
  if (this.kv_map.has(key)) {
    // key existed
    const node = this.kv_map.get(key);
    node.val = value;
    this.touch(node);
    return;
  }

  if (this.kv_map.size == this.capacity) {
    // has lowest freq
    const min_freq_list = this.freq_map.get(this.min_freq);
    const key_to_remove = min_freq_list[min_freq_list.length - 1];
    min_freq_list.pop();
    this.kv_map.remove(key_to_remove);
  }
  // new item has freq 1
  // add key to the freq list
  const freq = 1;
  this.min_freq = 1;
  const freq_list = this.freq_map.get(1);
  freq_list.unshift(key);

  // create a new node
  this.kv_map.set(key, new CacheNode(key, value, freq));
};

LFUCache.prototype.touch = function (node) {
  // 1. update the frequency
  const prev_freq = node.freq;
  const freq = prev_freq + 1;

  // 2. remove the entry from the old freq list
  const freq_list=this.freq_map.get(prev_freq);
  freq_list
  // 3. insert the key into the front of the new freq list

  // 5. update the pointer
};
LFUCache.prototype.remove = function (node) {
  var prev = node.prev;
  var next = node.next;
  if (next) next.prev = prev;
  if (prev) prev.next = next;
  this.map.delete(node.key);
};
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
