/*
778. Swim in Rising Water

n x n integer matrix grid where each value grid[i][j] represents the elevation 
at that point (i, j).
每个cell是可以通过的时间， 找一条路径，使路径上的最大值最小

Hard

https://leetcode.com/problems/swim-in-rising-water
*/

/*
https://www.youtube.com/watch?v=amvrKlMLuGY&ab_channel=NeetCode
*/

/*
https://zxi.mytechroad.com/blog/heap/leetcode-778-swim-in-rising-water/

BFS + Priority Queue

Time O(n^2log(n^2)) = O(n^2logn)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var swimInWater = function(grid) {
  const  n = grid.length;
  // 选出最小值
  const minHeap = new PriorityQueue((a, b) => a[0] < b[0]); // {time, row, col}
  
  minHeap.push([grid[0][0], 0 , 0]);
  const visited = Array.from(Array(n), ()=>Array(n).fill(0));

  visited[0][0] = 1;
  while (!minHeap.isEmpty()) {
    const [time, row, col] = minHeap.pop()
    if (row == n - 1 && col == n - 1) return time;

    for (const dir of [[1, 0], [-1,0], [0,1], [0,-1]]) {
      const nRow = row + dir[0];
      const nCol = col + dir[1];
      if (nRow < 0 || nCol < 0 || nRow >= n || nCol >= n) continue;
      if (visited[nRow][nCol]) continue;
      visited[nRow][nCol] = 1;
      // push 路径上的最大值
      minHeap.push([Math.max(time, grid[nRow][nCol]),nRow, nCol ]);
    }
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
