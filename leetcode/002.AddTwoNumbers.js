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
var addTwoNumbers = function(l1, l2) {
  if (l1 == null && l2 == null) return null;
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let carry = 0;
  let dummy = new ListNode(-1);
  let head = dummy;
  while (l1 != null || l2 != null) {
    let v1 = 0;
    if (l1 != null) {
      v1 = l1.val;
      l1 = l1.next;
    }
    let v2 = 0;
    if (l2 != null) {
      v2 = l2.val;
      l2 = l2.next;
    }
    
    let sum = v1 + v2 + carry;
    let digit = sum % 10;
    carry = parseInt(sum / 10);
    head.next = new ListNode(digit);
    head = head.next;
  }
  if (carry > 0) head.next = new ListNode(carry);
  return dummy.next;
};

// Test Case
let l1 = new ListNode(2);
let h1 = l1;
l1.next = new ListNode(4);
h1 = h1.next;
h1.next = new ListNode(3);


let l2 = new ListNode(5);
let h2 = l2;
h2.next = new ListNode(6);
h2 = h2.next;
h2.next = new ListNode(4);

let res = addTwoNumbers(l1, l2);
console.log(res);
