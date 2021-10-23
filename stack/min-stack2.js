var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (x < this.min) {
        this.min = x;
    }
};

/**
 * Calculate min when pop a value
 */
MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    if (this.min === popped) {
        this.min = Math.min(...this.stack);
    }
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};