/*
225. Implement Stack using Queues
https://leetcode.com/problems/implement-stack-using-queues/
*/

/*
  Solution:  statck = queue_data + queue_helper

*/

var MyStack = function() {
    this.queue_data = [];
    this.queue_helper = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue_data.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.queue_data.length > 1)
  {
    this.queue_helper.push(this.queue_data.shift());
  }
  const element = this.queue_data.shift();
  //
  while (this.queue_helper.length > 0)
  {
    this.queue_data.push(this.queue_helper.shift());
  }
  return element;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  while (this.queue_data.length > 1)
  {
    this.queue_helper.push(this.queue_data.shift());
  }
  const element = this.queue_data.shift();
  this.queue_helper.push(element)
  //
  while (this.queue_helper.length > 0)
  {
    this.queue_data.push(this.queue_helper.shift());
  }
  return element;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue_data.length ===0;  
};