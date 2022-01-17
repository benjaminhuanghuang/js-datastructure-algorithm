/*
445. Add Two Numbers II

https://leetcode.com/problems/add-two-numbers-ii/


Follow up: Could you solve it without reversing the input lists?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var addTwoNumbers = function (l1, l2) {
  const stack1 = [];
  const stack2 = [];
  const result = [];

  const dummy = new ListNode(-1);
  push(l1, stack1);
  push(l2, stack2);

  let carry = 0;
  let head = dummy;
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    let v1 = 0,
      v2 = 0;
    if (stack1.length > 0) {
      v1 = stack1.pop();
    }
    if (stack2.length > 0) {
      v2 = stack2.pop();
    }
    const sum = (v1 + v2 + carry) % 10;
    carry = Math.floor((v1 + v2 + carry) / 10);
    result.push(sum);
  }
  while(result.length>0) {
      head.next = new ListNode(result.pop());
      head = head.next;
  }  
  return dummy.next;
};

function push(p, stack) {
  while (p) {
    stack.push(p.val);
    p = p.next;
  }
}
/*
  Solution: 
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const reverseLinkedList = (head) => {
    if (!head) {
      return head;
    }

    let prev = null;
    while (head) {
      let tmp = head.next;

      head.next = prev;
      prev = head;
      head = temp;
    }

    return prev;
  };

  const addTwoList = (l1, l2) => {
    let carry = 0;
    const dummy = new ListNode(-1, null);
    const head = dummy;
    while (l1 && l2) {
      const sum = l1.val + l2.val + carry;
      head.next = new ListNode(sum % 10);
      carry = sum / 10;
      head = head.next;
      l1 = l1.next;
      l2 = l2.next;
    }

    while (l1) {
      const sum = l1.val + carry;
      head.next = new ListNode(sum % 10);
      carry = sum / 10;
      head = head.next;
      l1 = l1.next;
    }
    while (l2) {
      const sum = l2.val + carry;
      head.next = new ListNode(sum % 10);
      carry = sum / 10;
      head = head.next;
      l2 = l2.next;
    }

    if (carry) {
      head.next = new ListNode(carry);
    }
    return dummy.next;
  };
  const l1 = reverseLinkedList(l1);
  const l2 = reverseLinkedList(l2);

  const sum = addTwoList(l1, l2);

  return reverseLinkedList(sum);
};
