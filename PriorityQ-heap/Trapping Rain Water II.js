/*
407. Trapping Rain Water II

Hard
https://leetcode.com/problems/trapping-rain-water-ii/
*/
/*
  https://www.youtube.com/watch?v=uupOnJJxPbI&ab_channel=HuifengGuan

  BFS + Priority Queue
  海水会从4边围成的围墙的最低点涌入。
*/
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const rows = heightMap.length;
  const cols = heightMap[0].length;
  const visited = Array.from(Array(rows), ()=> Array(cols).fill(false));

  // [height, row, col]
  const minHeap = new PriorityQueue((a, b) => {
    a[0] - b[0];
  });
  // push the border
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row == 0 || row == rows - 1 || col == 0 || col == cols - 1) {
        minHeap.push([heightMap[row][col], row, col]);
      }
    }  
  }
  // 当前海平面高度
  let curr = -1;
  let res = 0;
  while (minHeap.size() > 0) {
    // lowest
    const [heigh, row, col] = minHeap.pop();

    if(visited[row][col]) continue;
    visited[row][col] = true;

    if (heigh > curr) {
      curr = heigh;
    }
    ret += curr -heigh; // 海平面比当前heigh高，注水
    for(const dir of [[0,-1],[0,1],[-1,0],[1,0]]){
      // row, col of the neighobur
      const nRow = row + dir[0];
      const nCol = col + dir[1];
      if(nRow<0 || nRow>=rows || nCol < 0 || nCol >= cols || visited[nRow][nCol]){
        continue;
      }
      minHeap.push([heightMap[nRow][nCol], nRow, nCol])
    }
  }

  return res;

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
