/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1==null && l2== null)
    return null;
  if (l1== null)
    return l2;
  if (l2==null)
    return l1;

  let dummyHeader = new ListNode(-1);
  let curr = dummyHeader;

  while(l1 !== null && l2!== null)
  {
    if (l1.val < l2.val)
    {
      curr.next = new ListNode(l1.val);
      l1 = l1.next;
    }
    else
    {
      curr.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if(l1 !== null)
    curr.next = l1;
  if(l2 !== null)
    curr.next = l2;
    
  return dummyHeader.next;
};  