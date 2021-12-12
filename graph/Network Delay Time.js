/*
743. Network Delay Time

Google

https://leetcode.com/problems/network-delay-time
*/

/*
  Dijkstra's algorithm (Shortest path)
  https://www.youtube.com/watch?v=EaphyqKU4PQ&ab_channel=NeetCode

  minHeap  (path, node)

  Time complexity O(E * logV)
  Space complexity O(N +E)
*/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = new Map();
  // u to v, weight
  for (const [u, v, w] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, w]);
  }
  //console.log(graph)
  const minHeap = new PriorityQueue((item1, item2) => {
    // compare the path
    return item1[1] < item2[1];
  });

  minHeap.push([k, 0]);

  const visit = new Set();
  let maxDealyTime = 0;

  while (!minHeap.isEmpty()) {
    const [n1, w1] = minHeap.pop();
    if (visit.has(n1)) {
      continue;
    }
    visit.add(n1);
    maxDealyTime = Math.max(maxDealyTime, w1);
    if (graph.has(n1)) {
      for (const [n2, w2] of graph.get(n1)) {
        if (!visit.has(n2)) {
          minHeap.push([n2, w1 + w2]);
        }
      }
    }
  }
  return visit.size == n ? maxDealyTime : -1;
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
