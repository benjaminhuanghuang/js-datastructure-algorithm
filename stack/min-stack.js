class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  // Time: O(1)
  push(val) {
    if (this.stack.length === 0) {
      this.min.push(val);
    } else {
      const minVal = Math.min(val, this.min[this.min.length - 1]);
      this.min.push(minVal);
    }
    this.stack.push(val);
  }

  pop() {
      this.stack.pop();
      this.min.pop();
  }

  top() {
      return this.stack[this.stack.length-1];
  }

  getMin() {
      return this.min[this.min.length-1];
  }
}
