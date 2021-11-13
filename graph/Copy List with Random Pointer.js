/*
138. Copy List with Random Pointer

https://leetcode.com/problems/copy-list-with-random-pointer/

*/


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function (head) {
  if (!head) return null;

  var map = new Map();
  
  // Copy, put <original, copied> to the map
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }

  // link
  curr = head;
  while (curr) {
    map.get(curr).next = map.get(curr.next) || null;
    map.get(curr).random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};