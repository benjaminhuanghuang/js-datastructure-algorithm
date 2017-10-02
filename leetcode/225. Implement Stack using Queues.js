/*
225. Implement Stack using Queues

# 232. Implement Queue using Stacks
*/
var MyStack = function() {
  this.q = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.q.push(x);
  for(let i = 0;i < this.q.length -1 ;i++)   // -1!!!
  {
    this.q.push(this.q.shift());
  }
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.q.shift();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.q[0];
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.q.length == 0;
};

let s = new MyStack();
s.push(1);
s.push(2);
s.push(3);
let res = s.top();
console.log(res);

