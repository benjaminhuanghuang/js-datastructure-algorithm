/*
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*/


/*
  "start" is node before Nth node from end
  因此要保证start.next不能为null
*/
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1, head);

  let fast = dummy;

  while (n >= 0 && fast) {
    fast = fast.next;
    n--;
  }

  let slow = dummy;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
