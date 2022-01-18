/*
380. Insert Delete GetRandom O(1)

https://leetcode.com/problems/insert-delete-getrandom-o1/
*/

var RandomizedSet = function () {
  this.map = new Map(); // val -> index
  this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.data.length);
  this.data.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  // 把 data[] 中最后一个元素放到 val 所在的位置
  const index = this.map.get(val);
  const lastData = this.data[this.data.length - 1];
  // update pos of last data in map
  this.map.set(lastData, index);
  this.map.delete(val);
  //swap and delete the value in data
  const tmp = this.data[index];
  this.data[index] = this.data[this.data.length - 1];
  this.data[this.data.length - 1] = tmp;
  this.data.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.data.length );
  return this.data[index];
};
