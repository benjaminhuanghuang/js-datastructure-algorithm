var search = function(nums, target) {
  if( nums == null || nums.length < 1)
    return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] == target) return left;
    if (nums[right] == target) return right;
    let mid = parseInt((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] > nums[left]) {
      // mid located in left part, which is increasing
      if ( nums[left] < target &&  target < nums[mid] ) //  target located between left and mid
      {
        right = mid - 1; //  target is bigger than mid
      }
      else 
      {
        left = mid + 1;
      }
    } 
    else {
      // mid located in right part, which is decreasing
      if ( nums[mid] < target && target < nums[right]) //target located between mid and right
      {
        left = mid + 1; // target is less then mid
      }
      else 
      {
        right = mid - 1;
      }
    }
  }
  return -1;
};
