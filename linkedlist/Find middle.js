function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while(fast && fast.next){
      fast = fast.next.next;
      slow = slow.next;
  }

  return slow;
}
