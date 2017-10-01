var searchInsert = function(nums, target) {
  if(nums == null || nums.length == 0)
    return 0;

  let low =0;
  let high = nums.length - 1;
  
  while(low +1 < high)
  {
    let mid = parseInt((low+high)/2);
    if(nums[mid] == target)
      return mid;
    else if (nums[mid] > target)
    {
      high = mid;
    }
    else{
      low = mid;
    }
  }

  if (nums[low] >= target)
    return low;
  if (nums[high]>=target)
    return high;
  return nums.length; 
};