/*
  2. Add Two Numbers

  https://leetcode.com/problems/add-two-numbers/
*/


var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  const dummy = new ListNode(-1, null);
  let head = dummy;
  while(l1 && l2)
  {
    const sum = l1.val + l2.val + carry;
    head.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    head = head.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  while(l1){
    const sum = l1.val + carry;
    head.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    head = head.next;
    l1 = l1.next;
  }
  while (l2)
  {
    const sum = l2.val + carry;
    head.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    head = head.next;
    l2 = l2.next;
  }

  if(carry > 0)
  {
    head.next = new ListNode(carry);
  }
  return dummy.next;
};

