var containsNearbyDuplicate = function(nums, k) {
  if (nums == null || nums.length == 0) return false;

  var dict = {};
  
  for(var i = 0; i < nums.length; i++)
  {   if(nums[i] in dict)
      { 
          if(i - dict[nums[i]] <= k)
              return true;
          else
            dict[nums[i]] = i;
      }
      else
        dict[nums[i]] = i;
  }
  return false;
};
let res = containsNearbyDuplicate([-1,-1], 1);
console.log(res);