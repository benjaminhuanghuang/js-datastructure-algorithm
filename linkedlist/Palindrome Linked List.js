/*
  234. Palindrome Linked List

  https://leetcode.com/problems/palindrome-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;

  //find list center
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let secondHead = slow.next;
  slow.next = null;

  //reverse second part of the list
  let prev = null;
  let curr = secondHead;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //compare two sublists
  let pRight = prev;
  let pLeft = head;
  while (pRight) {
    if (pLeft.val != pRight.val) return false;

    pLeft = pLeft.next;
    pRight = pRight.next;
  }

  return true;
};
