var deleteDuplicates = function(head) {
  if(head == null)
    return head;
  let prev = head;
  let curr = head.next;
  
  while(curr)
  {
    if(prev.val == curr.val)
    {
      prev.next = curr.next;
      curr = curr.next;
    }
    else
    {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};