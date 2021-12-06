/*
1046. Last Stone Weight

https://leetcode.com/problems/last-stone-weight/
*/

/*

Solution: Simulation (priority_queue)

Time complexity: O(nlogn)
Space complexity: O(n)

*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const q = new MaxHeap();
  for (const s of stones) q.push(s);
  while (q.size() > 1) {
    const x = q.pop();
    const y = q.pop();
    if (x == y) continue;
    q.push(Math.abs(x - y));
  }
  return q.isEmpty() ? 0 : q.peek();
};

class MaxHeap {
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
  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1); //
    return this.heap.length;
  }
  pop() {
    this.swap(this.heap.length - 1, 0);
    const val = this.heap[this.heap.length - 1];
    this.heap.pop(); // remove the last one
    this.heapifyDown(0);
    return val;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index] < this.heap[parentIndex]) return;
    this.swap(index, parentIndex);
    this.heapifyUp(parentIndex);
  }

  heapifyDown(index) {
    let targetIndex = index;
    let targetVal = this.heap[targetIndex];
    const leftChildIndex = targetIndex * 2 + 1;
    const rightChildIndex = targetIndex * 2 + 2;
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > targetVal) {
      targetIndex = rightChildIndex;
      targetVal = this.heap[rightChildIndex];
    }
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > targetVal) {
      targetIndex = leftChildIndex;
      targetVal = this.heap[leftChildIndex];
    }

    if (targetIndex === index) return;

    this.swap(targetIndex, index);

    this.heapifyDown(targetIndex);
  }
}
