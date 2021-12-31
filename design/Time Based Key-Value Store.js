/*
981. Time Based Key-Value Store

https://leetcode.com/problems/time-based-key-value-store/


*/

var TimeMap = function () {
  this.map = new Map(); //  key => [{value,  timestamp}, {value,  timestamp}...]
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return "";
  const n = this.map.size;
  if (this.map.get(key)[0][1] > timestamp) return "";

  // binary seach
  // Returns a value such that set was called previously, with timestamp_prev <= timestamp.
  // 对于C++, 可以 upper_bound 来进行快速查找第一个大于目标值的位置，往后退一位，就是不大于目标值的位置。
  // 但是在退之前要判断得到的位置是否是起始位置，是的话就没法再往前退一位了，直接返回空串，不是的话可以退一位并返回即可

  const arr = this.map.get(key);
  let l = 0;
  let r = arr.length;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid][1] > timestamp) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (l > 0) l--;
  return arr[l][0];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
