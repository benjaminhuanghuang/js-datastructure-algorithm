var Solution = function(nums) {
  this.nums = nums;
  this.backup = [...nums];
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  this.nums = [...this.backup];
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  if(this.nums == null || this.nums.length == 0)
    return this.nums;
  for(let i = this.nums.length -1; i >=0; i --)
  {
    let target = Math.floor(Math.random() * (i+1));  // i + 1!!!!
    console.log(target);
    let tmp = this.nums[target];
    this.nums[target] = this.nums[i];
    this.nums[i] = tmp;
  }
  return this.nums;
};
// [min, max)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


//Your Solution object will be instantiated and called as such:
var obj = new Solution([1,2,3]);
var param_1 = obj.reset();
console.log(param_1);
var param_2 = obj.shuffle();
console.log(param_2);