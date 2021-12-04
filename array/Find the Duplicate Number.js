/*
287. Find the Duplicate Number

https://leetcode.com/problems/find-the-duplicate-number/
*/

/*
  Find the Duplicate Number - Floyd's Cycle Detection - Leetcode 287 - Python
  https://www.youtube.com/watch?v=wjYnzkAhcNk
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let slow=0, fast =0;

    // find cycle
    while(true) {
      slow = nums[slow];
      fast = nums[nums[fast]];

      if(slow == fast){
        break;
      }
    }

    let slow2 = 0;  // set slow2 to the start
    // find the intersction
    while(true){
      slow = nums[slow];
      slow2 = nums[slow2];
      if( slow == slow2){
        return slow;
      }
    }
    return -1;

};