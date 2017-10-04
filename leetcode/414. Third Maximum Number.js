var thirdMax = function(nums) {
  let max1 = Number.MIN_SAFE_INTEGER, max2= Number.MIN_SAFE_INTEGER, max3=Number.MIN_SAFE_INTEGER;
  
  for (let i =0; i < nums.length; i++)
  {
      if (nums[i] > max1)
      {
          max3 = max2;
          max2 = max1;
          max1 = nums[i];
      }
      else if (max1 > nums[i] && nums[i] > max2)
      {
          max3 = max2;                  
          max2 = nums[i]; 
      }
      else if (max2 > nums[i] && nums[i] > max3)
      {
          max3 = nums[i];
      }
  }
  if (max3 == Number.MIN_SAFE_INTEGER)
      return max1;
  return max3;
};