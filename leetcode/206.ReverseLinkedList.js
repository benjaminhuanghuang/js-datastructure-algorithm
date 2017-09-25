function ListNode(val){
  this.val = val;
  this.next = null;
}

function reverseList(head){
  if(head == null)
    return head;

  let prev = null;
  while(head)
  {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}