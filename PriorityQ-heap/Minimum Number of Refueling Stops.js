/*
871. Minimum Number of Refueling Stops

Hard

https://leetcode.com/problems/minimum-number-of-refueling-stops/
*/

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
/*
BFS

https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-871-minimum-number-of-refueling-stops/

Time complexity: O(nlogn)

Space complexity: O(n)
*/
var minRefuelStops = function (target, startFuel, stations) {
  let cur = startFuel;
  let stops = 0;
  let i = 0;
  const maxHeap = new PriorityQueue((a, b) => a > b); // gas (high to low) of reachable stations.
  while (true) {
    if (cur >= target) return stops;
    while (i < stations.length && stations[i][0] <= cur) {
      maxHeap.push(stations[i++][1]);
    }
    if (maxHeap.isEmpty()) break;
    cur += maxHeap.pop();
    ++stops;
  }
  return -1;
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

/*
DP

https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-871-minimum-number-of-refueling-stops/


*/
