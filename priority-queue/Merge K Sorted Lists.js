/*

23. Merge K Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  const pq = new MinHeap();
  for (const node of lists) {
    if (node) {
      pq.push(node);
    }
  }

  const dummy = new ListNode(-1);
  let head = dummy;
  while (!pq.isEmpty()) {
    const smallest = pq.pop();
    head.next = smallest;
    head = head.next;
    if (smallest.next) {
      pq.push(smallest.next);
    }
  }

  return dummy.next;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length == 0;
  }
  peek() {
    return this.heap[0];
  }
  push(item) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1); //
    return this.heap.length;
  }
  pop() {
    this.swap(this.heap.length - 1, 0);
    const element = this.heap.pop();
    if (this.heap.length > 1) this.heapifyDown(0);
    return element;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index].val > this.heap[parentIndex].val) return;
    this.swap(index, parentIndex);
    this.heapifyUp(parentIndex);
  }

  heapifyDown(index) {
    let targetIndex = index;
    let targetVal = this.heap[targetIndex].val;
    const leftChildIndex = targetIndex * 2 + 1;
    const rightChildIndex = targetIndex * 2 + 2;
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < targetVal) {
      targetIndex = rightChildIndex;
      targetVal = this.heap[targetIndex].val;
    }
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < targetVal) {
      targetIndex = leftChildIndex;
    }

    if (targetIndex === index) return;

    this.swap(targetIndex, index);

    this.heapifyDown(targetIndex);
  }
}
