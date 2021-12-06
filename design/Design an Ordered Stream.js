/*
1656. Design an Ordered Stream

https://leetcode.com/problems/design-an-ordered-stream/
*/
/*

Time complexity: O(n) in total
Space complexity: O(n)

*/

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.ptr = 1;
  this.data = new Array(n + 1).fill(null);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.data[idKey] = value;
  const ans = [];
  if (idKey === this.ptr)
    while (this.ptr < this.data.length && this.data[this.ptr]) {
      ans.push(this.data[this.ptr]);
      this.ptr += 1;
    }
  return ans;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
