/*
  Solution: 
  http://blog.csdn.net/monkeyduck/article/details/50439840  
*/

var findDuplicate = function(nums) {
  if(nums== null || nums.length === 0)
    return -1;

  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow != fast)
  {
      slow = nums[slow];
      fast = nums[nums[fast]];
  }

  fast = 0;
  while (fast != slow)
  {
      fast = nums[fast];
      slow = nums[slow];
  }
  return slow;
  
};
