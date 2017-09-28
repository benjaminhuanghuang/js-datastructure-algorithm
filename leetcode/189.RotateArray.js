var rotate = function(nums, k) {
  if(nums == null)
    return;
  let len = nums.length;
  if(len <=0 )
    return;
  k = k % len;
  if(k<=0)
    return nums;
  rotateBetween(nums, 0, len-1);
  rotateBetween(nums, 0, k -1);
  rotateBetween(nums, k, len-1);
};

function rotateBetween(nums, i, j)
{
  while(i < j)
  {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    i ++;
    j --;
  }
}
let nums = [1,2,3]; //[1,2,3,4,5,6,7];
rotate(nums, 1);
console.log(nums);