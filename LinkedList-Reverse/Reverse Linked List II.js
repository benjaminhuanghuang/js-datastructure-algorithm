/*
92. Reverse Linked List II


https://leetcode.com/problems/reverse-linked-list-ii/

[MS]
*/

/*
  https://www.youtube.com/watch?v=RF_M9tX4Eag&ab_channel=NeetCode

  与206. Reverse Linked List的区别

*/
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);
  let leftPrev = dummy;

  // Find the left-1 th node
  for (let i = 0; i < left - 1; ++i) {
    leftPrev = leftPrev.next;
  }

  // curr points to node left, leftPrev is then node before curr
  let curr = leftPrev.next;

  // Reverse from m to n
  let prev = null;
  for (let i = left; i <= right; ++i) {
    const tmp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = tmp;
  }
  leftPrev.next.next = curr;
  leftPrev.next = prev;
  return dummy.next;
};


var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  // Find the left-1 th node
  for (let i = 0; i < left - 1; ++i) {
    prev = prev.next;
  }

  // curr points to node left, prev is then node before curr
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
