/*
708. Insert into a Sorted Circular Linked List	

https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
https://www.cnblogs.com/Dylan-Java-NYC/p/12231981.html

*/

/*
The insertion position is within 3 condition,

1. cur go through a round back to head.

2.  cur.val <= insertVal <= cur.next.val

3. insertVal super max or insertVal super small, insert into the fall down position.

*/
function insert( head, insertVal) {
  const insertNode = new Node(insertVal);
  if(head == null){
    insertNode.next = insertNode;
      return insertNode;
  }

  let  cur = head;
  while(cur.next != head
        && !((cur.val <= insertVal && insertVal <= cur.next.val)
             || (cur.val > cur.next.val && cur.next.val > insertVal && cur.val < insertVal))){
      cur = cur.next;
  }
  // insert node after curr
  insertNode.next = cur.next;
  cur.next = res;
  return head;
}