/*
  25. Reverse Nodes in k-Group
  
  [Hard]

  https://leetcode.com/problems/reverse-nodes-in-k-group/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
  Solution: Two passes.

  https://www.youtube.com/watch?v=1UOPsfP85V4&ab_channel=NeetCode

    Time complexity: O(n)
    Space complexity: O(1)
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k == 1) return head;

  const dummy = new ListNode(-1, head);
  const groupPrev = dummy;

  // get the Kth node after curr
  const getKth = (curr, K) => {
    while (curr && K > 0) {
      curr = curr.next;
      K--;
    }
    return curr;
  };

  while (true) {
    // groupPrev is not a part of group
    let kth = getKth(groupPrev, k);
    if (!kth) {
      break;
    }
    // save the node after the group, it will be the end point of reverse
    let groupNext = kth.next;

    // revese the node in group from [groupPrev.next to kth], groupPrev is not a part of group
    let prev = kth.next;
    let curr = groupPrev.next;  // first node in the group
    while (curr != groupNext) {
      let tmp = curr.next;
      curr.next = prev;
      prev = curr; 
      curr = tmp;
    }
    let tmp = groupPrev.next;  // first of next group
    groupPrev.next = kth;  // make the kth to the first node in the group
    groupPrev = tmp;
  }

  return dummy.next;
};

/*
  Solution: Two passes.

    First pass, get the length of the list.

    Second pass, swap in groups.

    Time complexity: O(n)
    Space complexity: O(1)
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k == 1) return head;

  const dummy = new ListNode(-1, head);

  // get length
  let len = 1; // not 0
  while ((head = head.next)) len++;

  // reverse
  let pre = dummy;
  for (let l = 0; l + k <= len; l += k) {
    let cur = pre.next;
    let next = cur.next;
    for (let i = 1; i < k; ++i) {
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
      next = cur.next;
    }
    pre = cur;
  }
  return dummy.next;
};
