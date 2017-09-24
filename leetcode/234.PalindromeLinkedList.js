/**
 * 234. Palindrome Linked List
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
  if (head == null) return true;
  const linkLength = getLinkLength(head);
  const half = reverseLinkedList(head, Math.ceil(linkLength / 2.0) + 1);

  while (head && half) {
    if (head.val != half.val) return false;
    head = head.next;
    half = half.next;
  }
  return true;
};

function getLinkLength(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}

function reverseLinkedList(head, startIndex) {
  let halfHeader = head;
  while (startIndex > 0 && halfHeader) {
    halfHeader = halfHeader.next;
  }

  let prev = null;
  while (halfHeader) {
    let next = halfHeader.next;
    halfHeader.next = prev;
    prev = halfHeader;
    halfHeader = next;
  }
  return halfHeader;
}

module.exports = { isPalindrome, reverseLinkedList };
