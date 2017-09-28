function ListNode(val)
{
  this.val = val;
  this.next = null;
}

var sortList = function(head) {
  if(head == null || head.next == null)
    return head;
  let slow = head;
  let fast = head.next;
  while(fast && fast.next)
  {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHead = slow.next;
  slow.next = null;

  let firstPart = sortList(head);
  let secondPart = sortList(secondHead);

  return mergeLinkedList(firstPart, secondPart);
};

function mergeLinkedList(head1, head2)
{
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;
  while(head1 && head2)
  {
    if(head1.val > head2.val)
    {   
      curr.next = new ListNode(head2.val)
      head2 = head2.next;
    }
    else
    {
      curr.next = new ListNode(head1.val)
      head1 = head1.next;
    }
    curr = curr.next;
  }

  if (head1)
    curr.next = head1;
  if (head2)
    curr.next = head2;

  return dummyHead.next;
}

let l = new ListNode(2);
l.next = new ListNode(1);

let res = sortList(l);
