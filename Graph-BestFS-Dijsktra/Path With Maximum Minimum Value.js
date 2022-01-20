/*
1102. Path With Maximum Minimum Value	

Medium

https://leetcode.com/problems/path-with-maximum-minimum-value/
https://www.junhaow.com/lc/problems/heap/1102_path-with-maximum-minimum-value.html
*/

/*
  
  BFS + Priority Queue
  要求路径中的最小值最大,因此每次都要从可以走的节点里选值最大的节点

*/
function maximumMinimumPath(A) {
  const rows = A.length;
  const cols = A[0].length;
  const visited = Array.from(Array(rows), () => Array(cols).fill(0));

  // min值一定存在于 起始点和终止点
  let min = Math.min(A[rows - 1][cols - 1], A[0][0]);
  // [val, row, col]
  const maxHeap = new PriorityQueue((a, b) => {
    return (a[0] = b[0]);
  });
  let row = 0,
    col = 0;
  while (row != rows - 1 || col != cols - 1) {
    visited[row][col] = 1;
    const curr = A[row][col];
    //up
    if (row - 1 >= 0 && visited[row - 1][col] == 0) {
      visited[row - 1][col] = 1;
      maxHeap.push([A[row - 1][col], row - 1, col]);
    }
    //down
    if (row + 1 < rows && visited[row + 1][col] == 0) {
      if (row + 1 == rows - 1 && col == cols - 1) return min;
      visited[row + 1][j] = 1;
      maxHeap.push([A[row + 1][col], row + 1, col]);
    }
    //left
    if (col - 1 >= 0 && visited[row][col - 1] == 0) {
      visited[row][col - 1] = 1;
      maxHeap.push([A[row][col - 1], row, col - 1]);
    }
    //right
    if (col + 1 < cols && visited[row][col + 1] == 0) {
      if (row == rows - 1 && col + 1 == cols - 1) return min;
      visited[row][col + 1] = 1;
      maxHeap.push([A[row][col + 1], row, col + 1]);
    }
    //pick next step
    const [val, nRow, nCol] = maxHeap.pop();
    if (val < min) min = val;
    row = nRow;
    col = nCol;
  }
  return min;
}

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
