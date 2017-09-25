function ListNode(val)
{
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  if (head == null)
    return false;

  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null)
  {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast)
          return true;
  }

  return false;

};