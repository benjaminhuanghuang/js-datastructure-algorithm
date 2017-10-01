var removeElement = function(nums, val) {
  if(nums == 0|| nums.length ==0)
    return 0;
  let last = nums.length -1;
  let curr =0;
  while(curr <= last) // = for corner case
  {
    if(nums[curr] == val)
    {
      let tmp = nums[curr];
      nums[curr] = nums[last];
      nums[last] = tmp;
      last--;
    }
    else
      curr++;
  }
  return last + 1;
};