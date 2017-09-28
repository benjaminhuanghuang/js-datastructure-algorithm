
var containsDuplicate = function(nums) {
  if(nums == null || nums.legth ==0)
    return false;
  
  let dict ={};
  for (n of nums)
  {
    if (n in dict)
      return true;
    else
      dict[n]=1;
  }
  return false;
};