/*
232. Implement Queue using Stacks

https://leetcode.com/problems/implement-queue-using-stacks/
*/


/*
  Solution:  Queue = stack_in + stack_out

*/
var MyQueue = function () {
  this.stack_out = [];
  this.stack_in = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack_in.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack_out.length === 0) {
    while (this.stack_in.length > 0) {
      this.stack_out.push(this.stack_in.pop());
    }
  }

  const val = this.stack_out.pop();
  return val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack_out.length === 0) {
    while (this.stack_in.length > 0) {
      this.stack_out.push(this.stack_in.pop());
    }
  }
  return this.stack_out.length ? this.stack_out[this.stack_out.length - 1] : null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack_in.length === 0 && this.stack_out.length === 0;
};
