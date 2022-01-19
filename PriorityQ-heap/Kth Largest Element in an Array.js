/*
215. Kth Largest Element in an Array

Level: Medium

https://leetcode.com/problems/kth-largest-element-in-an-array

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minheap = new MinHeap();

  for (const n of nums) {
    minheap.push(n);
    if (minheap.size() > k) {
      minheap.pop();
    }
  }

  return minheap.pop();
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
  push(...vals) {
    vals.forEach((val) => {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1); //
    });
    return this.heap.length;
  }
  pop() {
    this.swap(this.heap.length - 1, 0);
    const val = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return val;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index] > this.heap[parentIndex]) return;
    this.swap(index, parentIndex);
    this.heapifyUp(parentIndex);
  }

  heapifyDown(index) {
    let targetIndex = index;
    let targetVal = this.heap[targetIndex];
    const leftChildIndex = targetIndex * 2 + 1;
    const rightChildIndex = targetIndex * 2 + 2;
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < targetVal) {
      targetIndex = rightChildIndex;
      targetVal = this.heap[rightChildIndex];
    }
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < targetVal) {
      targetIndex = leftChildIndex;
      targetVal = this.heap[leftChildIndex];
    }

    if (targetIndex === index) return;

    this.swap(targetIndex, index);

    this.heapifyDown(targetIndex);
  }
}
