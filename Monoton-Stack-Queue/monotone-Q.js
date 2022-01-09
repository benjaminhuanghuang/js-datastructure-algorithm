/*
   decreasing queue, 每次push都会pop掉比当前元素小的元素
*/
class MonotonicQueue {
  constructor() {
    this.data = [];
  }
  push(e) {
    while (this.data.length > 0 && e > this.data[this.data.length - 1]) {
      this.data.pop();
    }
    this.data.push(e);
  }

  pop() {
   this.data.shift();
  }

  max() {
    return this.data[0];
  }
}
