/*
143. Reorder List

0 1 ... n-1, n
to 
0 n 1 n-1 2 n-2 ...

Medium

https://leetcode.com/problems/reorder-list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
  https://www.youtube.com/watch?v=S5bfdUTrKLM&ab_channel=NeetCode
  step 1. split
  step 2. reverse
  step 3. merge
*/
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let head2 = slow.next;
  slow.next = null;

  head2 = reverseList(head2);

  mergeList(head, head2);
};

function reverseList(head) {
  if (!head) {
    return head;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function mergeList(l1, l2) {
  const dummy = new ListNode(0);
  let use1 = true;
  while (l1 && l2) {
    if (use1) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
    use1 = !use1;
  }
  if (l1) {
    dummy.next = l1;
  }
  if (l2) {
    dummy.next = l2;
  }
  return dummyNode.next;
}
