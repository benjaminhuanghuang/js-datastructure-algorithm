/*
1976. Number of Ways to Arrive at Destination

https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/
*/

/*

*/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
 var countPaths = function(n, roads) {
  const graph = new Map();
  // 1. Use u to v, time to build a graph
  for (const [u, v, time] of roads) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, time]);
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(v).push([u, time]);
  }

  // 2. push the [start node, time] into the priority queue, pop the node whith has min time
  // time is the total time from current node to start node
  const minHeap = new PriorityQueue((item1, item2) => {
    // compare the path
    return item1[1] < item2[1];
  });

  minHeap.push([0, 0]);
  const shortestTime = new Map();
  
  while (!minHeap.isEmpty()) {
    const [n1, time1] = minHeap.pop();
    if(shortestTime.has(n1))
        continue;
    shortestTime.set(n1, time1);  
    if (graph.has(n1)) {
      for (const [n2, time2] of graph.get(n1)) {
        if (!shortestTime.has(n2)) {
          // the w1 + w2 is the tatal time from n2 to the start node (k)
          minHeap.push([n2, time1 + time2]);
        }
      }
    }
  }
  //console.log(graph);  
  //console.log(shortestTime);  
  /*
    由于最优路径可能多次经过同一个node， 会导致重复计算，因此要考虑记忆化
  */
  const mem = new Map();
  const M = 1e9 + 7;
  const dfs= (current,  totalTime ) =>
  {
    // current 不在最优路径上
    if(shortestTime.get(current) != totalTime) {
        return 0;
    }
    if(current == 0){
      return 1;
    }
    if(mem.has(current)) return mem.get(current);
    let total = 0;
    for(const [next, time] of graph.get(current)){
        total += dfs(next, totalTime-time);
        total %= M;
    }
    mem.set(current, total);
    return total;
  }
  
  // find path count
  return dfs(n-1, shortestTime.get(n-1));
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