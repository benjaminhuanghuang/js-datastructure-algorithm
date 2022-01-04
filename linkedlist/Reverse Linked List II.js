/*
92. Reverse Linked List II


https://leetcode.com/problems/reverse-linked-list-ii/
*/

var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  // Find the left-1 th node
  for (let i = 0; i < left - 1; ++i) {
    prev = prev.next;
  }

  // curr points to node left
  let curr = prev.next;

  // Reverse from m to n
  for (let i = left; i < right; ++i) {
    const tmp = curr.next;
    curr.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }
  return dummy.next;
};
