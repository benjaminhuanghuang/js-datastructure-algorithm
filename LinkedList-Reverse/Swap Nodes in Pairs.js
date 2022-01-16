/*
24. Swap Nodes in Pairs

https://leetcode.com/problems/swap-nodes-in-pairs/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
https://www.youtube.com/watch?v=o811TZLAWOo&ab_channel=NeetCode
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(-1, head);

  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    //save
    let nextPair = curr.next.next;
    let second = curr.next;

    // reverse
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    // update
    prev = curr;
    curr = nextPair;
  }
  return dummy.next;
};

var swapPairs = function (head) {
  const dummy = new ListNode(-1, head);
  head = dummy;

  while (head && head.next && head.next.next) {
    let n1 = head.next;
    let n2 = n1.next;

    n1.next = n2.next;
    n2.next = n1;
    head.next = n2;

    head = n1;
  }

  return dummy.next;
};
