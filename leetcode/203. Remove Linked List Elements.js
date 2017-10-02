var removeElements = function(head, val) {
  if(head == null)
    return head;
  
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let curr = dummyHead;

  while (curr)
  {
    if (curr.next && curr.next.val == val)
      curr.next = curr.next.next;
    else
      curr = curr.next;
  }
  return dummyHead.next;
};