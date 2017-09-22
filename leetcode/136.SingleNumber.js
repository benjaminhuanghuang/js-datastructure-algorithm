var singleNumber = function(nums) {
  if(nums == null || nums.length == 0)
    return -1;
  let exclusive = 0;
  for (num of nums)
  {
    exclusive = exclusive ^ num;
  }
  return exclusive;
};