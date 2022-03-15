/*
895. Maximum Frequency Stack

Level: Hard

Design a stack-like data structure to push elements to the stack and pop the most 
frequent element from the stack.

https://leetcode.com/problems/maximum-frequency-stack

# 460. LFU Cache
# 146. LRU Cache
*/

/*
  Solution: Buckets
  https://zxi.mytechroad.com/blog/desgin/leetcode-895-maximum-frequency-stack/

*/

var FreqStack = function () {
  this.stacks = []; // [stack1, stack2...] array of statcks, index is the freq of the value
  //
  this.freq = new Map(); // value -> freq
};

/**
 * @param {number} val
 * @return {void}
 * stacks[++freq(x)].push(x)
 */
FreqStack.prototype.push = function (val) {
  // update the freq of the val
  if (this.freq.has(val)) {
    this.freq.set(val, this.freq.get(val) + 1);
  } else {
    this.freq.set(val, 1);
  }

  const freq = this.freq.get(val);
  if (this.stacks.length < freq) {
    // append a new stack
    this.stacks.push([]);
  }
  this.stacks[freq - 1].push(val);
};

/**
 * @return {number}
 *  x = stacks[max_freq].pop()
 *  freq(x)--;
 */
FreqStack.prototype.pop = function () {
  // pop the item with highest freq, it is the last one in this.stacks
  const val = this.stacks[this.stacks.length - 1].pop();
  if (this.stacks[this.stacks.length - 1].length == 0) {
    // remove the empty stack
    this.stacks.pop();
  }
  if (this.freq.has(val)) {
    // freq --
    this.freq.set(val, this.freq.get(val) - 1);

    if (this.freq.get(val) === 0) {
      this.freq.delete(val);
    }
  }
  return val;
};
