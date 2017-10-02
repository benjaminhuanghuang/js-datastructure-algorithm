/*
232. Implement Queue using Stacks

# 225 
*/

var MyQueue = function() {
  this.sIn = [];
  this.sOut = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.sIn.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if(this.sOut.length == 0 )
  {
    while(this.sIn.length > 0)
      this.sOut.push(this.sIn.pop());
  }
  return this.sOut.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if(this.sOut.length == 0 )
  {
    while(this.sIn.length > 0)
      this.sOut.push(this.sIn.pop());
  }
  let element = this.sOut.pop();
  this.sOut.push(element);
  return element;
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.sOut.length == 0 && this.sIn.length == 0;
};