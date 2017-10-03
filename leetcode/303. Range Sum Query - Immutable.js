var NumArray = function(nums) {
  this.nums = nums;
  this.cache = new Array(nums.length);
  this.initCache();
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  if (i == 0)
    return this.cache[j];
  return this.cache[j] - this.cache[i-1];
};

NumArray.prototype.initCache = function() {
  let sum = 0;
  for(let i =0; i< this.nums.length;i++){
    sum += this.nums[i];
    this.cache[i] = sum;
  }
};