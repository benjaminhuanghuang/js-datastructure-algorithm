/*
complete tree


left child: index of parent * 2 +1
right child: index of parent * 2 + 2
parent index : (index of child - 1) / 2

push():  加到heap的最尾， 再 heapifyUp(-1)    O(logN) 因为complete tree最多 只有logN层
pop(): swap(-1, 0), return heap[-1], heapifyDown(0)


heapifyUp(): 
  递归与parent比较，交换
heapifyDown():


*/

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
    if (this.heap[index]> this.heap[parentIndex]) return;
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

// Default comparison semantics
const queue = new PriorityQueue();
queue.push(10, 20, 30, 40, 50);
console.log("Top:", queue.peek()); //=> 50
console.log("Size:", queue.size()); //=> 5
console.log("Contents:");
while (!queue.isEmpty()) {
  console.log(queue.pop()); //=> 40, 30, 20, 10
}
