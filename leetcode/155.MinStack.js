var MinStack = function() {
  this.vals = [];
  this.mins = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.vals.push(x);
  if(this.mins.length>0)
  {
    let min = this.mins[this.mins.length -1];
    this.mins.push(Math.min(min, x));
  }
  else
  this.mins.push(x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.vals.pop();
  this.mins.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if(this.vals.length > 0)
    return this.vals[this.vals.length -1];
  return -1;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if(this.mins.length > 0)
    return this.mins[this.mins.length -1];
  return -1;
};

var obj = Object.create(MinStack).createNew();
obj.push(x);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
