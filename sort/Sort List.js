/*
148. Sort List

https://leetcode.com/problems/sort-list/
*/

/*
    Hua Hua
    https://www.youtube.com/watch?v=M1TwY0nsTZA
    Merge Sort(Top-Down): 
      1.Split list into two parts
      2. Sort 递归深度N
      3. Merge logN

    Time complexity: O(NlogN)
    Space complexity: O(logN)   logN为递归深度
    */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 递归终止条件 0 or 1 element, we are done.
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let mid = slow.next;
  slow.next = null; // Break the list.
  return merge(sortList(head), sortList(mid));
};

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }
    tail = tail.next;
  }
  tail.next = l1 ? l1 : l2;
  return dummy.next;
}
