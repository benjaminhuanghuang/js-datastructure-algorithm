/*
767. Reorganize String

https://leetcode.com/problems/reorganize-string/
*/

/*
  Start from  the most frequent character
  如果大于S长度的一半，返回空字符串，
  如果小于，则将该字符从索引0开始，间隔着放置(0, 2, 4...)。然后再放其他字符，

  如果偶数索引没有放完，则接着间隔着放，如果偶数索引结束了，则从索引1开始(1, 3, 5...)。

  O(26* N)
*/
/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function (s) {
  const counter = new Map();

  for (const c of s) {
    if (counter.has(c)) {
      counter.set(c, counter.get(c) + 1);
    } else {
      counter.set(c, 1);
    }
  }

  const maxHeap = new PriorityQueue((item1, item2)=>{
    return item1[1] > item2[1]
  });

  for(const kv of counter)
  {
    maxHeap.push(kv);
  }
  let prev;
  let res = ''

  while(!maxHeap.isEmpty()){
    let [char, count] = maxHeap.pop();

    res += char;
    count --;
    
    if(prev && prev[1] > 0 && prev[0] != char) {
      maxHeap.push(prev);
    }
    
    prev = [char, count];

  }
  return s.length == res.length? res : '';
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
