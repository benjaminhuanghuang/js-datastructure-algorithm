/*
692. Top K Frequent Words

https://leetcode.com/problems/top-k-frequent-words/

*/
/*
  Solution 1: Use a map, Sort by frequency
   Time:  O(NlogN)
   Space: O(N)

*/
var topKFrequent = function (words, k) {
  const count = new Map();
  for (const word of words) {
    if (count.has(word)) {
      count.set(word, count.get(word) + 1);
    } else {
      count.set(word, 1);
    }
  }
};

/*
  Solution 3: 
  Bucket sorting
  Time:  O(N)
  Space: O(N) -> O(K)
*/
var topKFrequent = function (words, k) {
  var topKFrequent = function (nums, k) {
    const count = new Map();
    let max_freq = 1;
    for (const n of nums) {
      if (count.has(n)) {
        max_freq = Math.max(count.get(n) + 1, max_freq);
        count.set(n, count.get(n) + 1);
      } else {
        count.set(n, 1);
      }
    }
    const buckets = new Map();
    for (const [num, time] of count) {
      if (!buckets.has(time)) {
        buckets.set(time, []);
      }
      buckets.get(time).push(num);
    }
    const ans = [];
    for (let i = max_freq; i >= 1; i--) {
      if (buckets.has(i)) ans.push(...buckets.get(i));
      if (ans.length == k) break;
    }
    return ans;
  };
};
/*
  Solution 2: Max Heap
  全部放入 Max Heap, 再弹出 K 个

  Solution 3. Min Heap
  用min heap 保存最大的K个

  Time:  O(NlogK)
  Space: O(K)
*/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const count = new Map();
  for (const word of words) {
    if (count.has(word)) {
      count.set(word, count.get(word) + 1);
    } else {
      count.set(word, 1);
    }
  }

  const minHeap = new MinHeap();
  // 用min heap 保存最大值，最小的都被pop出了
  // O(n*logk)
  for (let kv of count.entries()) {
    minHeap.push(kv);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  const ans = [];
  while (minHeap.size() > 0) {
    a = minHeap.pop()[0];
    ans.unshift(a);
  }
  return ans;
};

class MinHeap {
  // Min heap by default
  constructor() {
    this.heap = [];
    // less, in min heap, node should < child node
    this.comparator = (node1, node2) => {
      // order by alphabet ASC
      if (node1[1] == node2[1]) return node1[0] > node2[0];
      // order by freq DESC
      return node1[1] < node2[1];
    };
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
