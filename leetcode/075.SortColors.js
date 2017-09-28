/*
Given an array with n objects colored red, white or blue, sort them so that objects of 
the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue 
respectively.
*/
var sortColors = function(nums) {
  if(nums == null || nums.length == 0)
    return;
  
  let redIndex = 0;
  let curr = 0;
  let blueIndex = nums.length - 1;

  while(curr <= blueIndex)   // should be <= 
  {
    if (nums[curr] == 0) // red
    {
      if(curr == redIndex)
      {
        curr++;
        redIndex ++;
      }
      else{
        swap(nums, curr, redIndex ++);
      }
    }
    else if (nums[curr] == 1) // while
    {
      curr++;
    }
    else{     // blue
      swap(nums, curr, blueIndex --);
    }
  }  
}

function swap(nums, i, j)
{
  let tmp = nums[i];
  nums[i] = nums[j]
  nums[j] = tmp;
}

let nums = [1,0];
sortColors(nums);
console.log(nums);