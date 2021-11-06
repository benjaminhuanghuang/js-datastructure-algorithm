/*
  1670. Design Front Middle Back Queue

  https://leetcode.com/problems/design-front-middle-back-queue/
*/

var FrontMiddleBackQueue = function () {
  this.left = [];
  this.right = [];
  this.balance = () => {
    if (this.left.length > this.right.length) {
      this.right.unshift(this.left.pop());
    } else if (this.left.length + 2 == this.right.length) {
      this.left.push(this.right.shift());
    }
  };
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.left.unshift(val);
  this.balance();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.left.length === this.right.length) {
    this.right.unshift(val);
  } else {
    this.left.push(val);
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.right.push(val);
  this.balance();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.left.length) {
    const val = this.left.shift();
    this.balance();
    return val;
  } else {
    if (this.right.length) {
      return this.right.shift();
    }
    return -1;
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  //console.log(this.left, this.right);
  if (this.left.length == this.right.length) {
    if (this.left.length > 0) {
      return this.left.pop();
    } else {
      return -1;
    }
  } else {
    if (this.right.length) return this.right.shift();
    return -1;
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.right.length) {
    const val = this.right.pop();
    this.balance();
    return val;
  }
  return -1;
};
