/*
532. K-diff Pairs in an Array
*/

var findPairs = function(nums, k) {
  if(nums == null || nums.length == 0 || k < 0) 
    return 0;
  let map = {};
  for(let i = 0; i < nums.length; ++i) {
      map[nums[i]] = i;
  }
  let res = 0;
  for(let i = 0; i < nums.length; ++i) {
      if( nums[i] + k in map && map[nums[i] + k] != i ) {
          delete map[nums[i] + k];
          res++;
      } 
  }
  return res;
};