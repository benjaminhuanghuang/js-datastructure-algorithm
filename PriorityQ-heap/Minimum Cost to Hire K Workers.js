/*
857. Minimum Cost to Hire K Workers

https://leetcode.com/problems/minimum-cost-to-hire-k-workers/

[Google]

*/

/* Gready: Sort + Priority Queue
  每个人的工资正比于工作量 => 每个人的单位工资一样
  wage[i]> wage expecation[i]
  需要关注的是 k个人中 wage expecation最高的人

*/
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const persons = [];
  for (let i = 0; i < quality.length; i++) {
    persons.push([quality[i], wage[i]]);
  }
  // sort by unit wage expecation
  persons.sort((a, b) => {
    return (a[1] / a[0]) - (b[1] / b[0]);
  })
  // keep the smaller ones
  const maxHeap = new PriorityQueue((a, b) => a > b);
  let quality_sum = 0;
  let minCost = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < persons.length; i++) {
    const unitWage = persons[i][1] / persons[i][0];
    quality_sum += persons[i][0];
    while(maxHeap.size() > k-1){
      quality_sum -= maxHeap.pop();
    }
    if(maxHeap.size() == k -1)
      minCost = Math.min(minCost, unitWage * quality_sum);
    maxHeap.push(persons[i][0])
  }

  return minCost;


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