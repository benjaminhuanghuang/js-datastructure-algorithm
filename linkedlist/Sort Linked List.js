/*

*/
function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function merge(head1, head2) {
  const dummy = new ListNode(-1);

  let curr = dummy;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      curr.next = head1.val;
      head1 = head1.next;
    } else {
      curr.next = head2.val;
      head2 = head2.next;
    }
    curr = curr.next;
  }

  if (head1) {
    curr.next = head1;
  }

  if (head2) {
    curr.next = head2;
  }

  return dummy.next;
}

function sortList(head) {
  if (head == null || head.next) {
    return head;
  }

  const mid = findMiddle(head);

  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);

  return merge(left, right);
}
