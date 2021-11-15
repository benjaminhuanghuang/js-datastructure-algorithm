/*
  740. Delete and Earn

  https://leetcode.com/problems/delete-and-earn/
*/



/*
  Solution:
  把数字看成房间编号， 不能获得隔壁房间的points
*/
var deleteAndEarn = function(nums) {
  // 1 <= nums.length <= 2 * 10^4
  // 1 <= nums[i] <= 10^4
  const houses = new Array(10**4 + 1);    
  for( n of nums) {
    houses[n] += n;
  }
  
  const maxGain = (i) =>{
    if( n < 0) 
    {
      return 0;
    }

    return Math.max(houses[i] + maxGain(i-2), maxGain(i-1));
  }

  return maxGain(nums.length-1);
};