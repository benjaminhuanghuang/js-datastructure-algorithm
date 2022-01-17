/*
82. Remove Duplicates from Sorted List II

Medium

https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null) return head;
  const dummy = new LitsNode(-1, head);

  let unique = dummy;

  while (head && head.next) {
    // find deuplicate value, update value for delete
    if (head.val == head.next.val) {
      const value = head.val;
      while (head && head.val == value) head = head.next;
      unique.next = head;
    } else {
      head = head.next;
      unique = unique.next;
    }
  }

  return dummy.next;
};
