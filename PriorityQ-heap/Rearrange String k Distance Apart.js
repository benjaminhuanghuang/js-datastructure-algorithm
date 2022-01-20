/*
358. Rearrange String k Distance Apart
使同样的字符至少距离K

Hard

https://leetcode.com/problems/rearrange-string-k-distance-apart/

#767. Reorganize String 是 #358的特例 k = 2
*/

/*
  每次取K个，这K个字符不能重复，
  优先取frequency最高的，因为希望剩下的字符种类越多越好

*/
function rearrangeString(s, k) {
  if (k == 0 || s.length < k) return s;

  // 1. count chars
  const counter = new Map();
  for (const c of s) {
    counter.set(c, (counter.get(c) || 0) + 1);
  }

  // 2. put char->count into max heap
  const maxHeap = new PriorityQueue((item1, item2) => {
    if (item1[1] == item2[1]) return item1[0].localeCompare(item2[0]);
    return item1[1] > item2[1];
  });

  for (const charFreq of counter) {
    maxHeap.push(charFreq);
  }

  // 3. select the K most-frequent element
  let res = ''
  while(!maxHeap.isEmpty()){
    // 会出现重复
    if(maxHeap.size() < k && maxHeap.peek()[1] > 1){
      return ''
    }
    const count = Math.min(k, maxHeap.size())
    const tmp = [];

    for(let i =0; i< count; i++){
      let charFreq = maxHeap.pop();

      tmp.push(charFreq);
      res += char;
    }
    for(const [char, freq] of tmp){
      if(freq > 1) {
        maxHeap.push([char, freq-1]); 
      }
    }
  }
  return res;
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
