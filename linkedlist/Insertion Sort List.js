/*
147. Insertion Sort List

Medium

https://leetcode.com/problems/insertion-sort-list/
*/


/*

*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var insertionSortList = function(head) {
  const dummy = new ListNode(-1, head);
  let curr = head;
  while (curr && curr.next) {
    if(curr.val <= curr.next.val){
      // sorted
      curr = curr.next
    } else{
      // curr.next is not sorted
      const tmp = curr.next;
      // remove curr.next
      curr.next = curr.next.next;
      // find instert point : prev.next > tmp
      let prev = dummy;
      while(prev.next.val <= tmp.val){
        prev = prev.next
      }
      tmp.next = prev.next;
      prev.next = tmp;
    }
  }
  return dummy.next;
};