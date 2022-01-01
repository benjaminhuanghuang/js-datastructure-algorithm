/*
295. Find Median from Data Stream

Hard
https://leetcode.com/problems/find-median-from-data-stream/

*/


/*
  Solution: 
  https://zxi.mytechroad.com/blog/leetcode/leetcode-295-find-median-from-data-stream/
  add(num): O(logn)

  findMedian(): O(logn)
*/


/*
  https://www.youtube.com/watch?v=itmhHWaHupI&ab_channel=NeetCode
  use minHeap for larger numbers and maxHeap for smaller nubmers
  to Heap, time complexity for adding is O(logN), remove is O(logN)
*/


var MedianFinder = function() {
    // max heap for smaller nums
    this.smaller = new PriorityQueue((a, b) => a> b);
    // min heap for larger nums
    this.larger = new PriorityQueue((a, b) => a< b);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // num < the max one wich in the smaller heap
  if (this.smaller.isEmpty() || num <= this.smaller.peek())
  {
    this.smaller.push(num);
  }
  else
  {
    this.larger.push(num);
  }

  // Step 2: Balence left/right (this.smaller.size() - this.larger.size()) <1
  if (this.smaller.size() < this.larger.size())
  {
    this.smaller.push(this.larger.pop());
  }
  else if (this.smaller.size() - this.larger.size() == 2)
  {
    this.larger.push(this.smaller.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.smaller.size() > this.larger.size())
  {
    return this.smaller.peek();
  }
  else // ==
  {
    return this.smaller.peek() + this.larger.peek() / 2;
  }
};

class PriorityQueue {
  // Min heap by default 
  constructor(comparator = (item1, item2) => item1 < item2) {
    this.heap = [];
    this.comparator = comparator;
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
    this.heap.pop();
    this.heapifyDown(0);
    return val;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor(index / 2);
    if (this.comparator(this.heap[parentIndex], this.heap[index])) {
      return;
    }
    this.swap(index, parentIndex);
    this.heapifyUp(parentIndex);
  }

  heapifyDown(index) {
    let targetIndex = index;
    const leftChildIndex = targetIndex * 2;
    const rightChildIndex = targetIndex * 2 + 1;

    if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[index])) {
      targetIndex = rightChildIndex;
    }

    if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[targetIndex])) {
      targetIndex = leftChildIndex;
    }
    if (targetIndex === index) return;

    this.swap(targetIndex, index);

    this.heapifyDown(targetIndex);
  }
}