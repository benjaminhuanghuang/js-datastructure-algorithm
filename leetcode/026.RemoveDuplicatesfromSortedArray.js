var removeDuplicates = function(nums) {
  if(nums == null || nums.length == 0)
  {
    return 0;
  }
  let len = nums.Length;
  if (len < 2)
      return len;

  let pivot = 0;
  for (let i =0; i < len ;i ++)
  {
    if(nums[pivot] != nums[i])
    {
      pivot++;
      nums[pivot] = nums[i]; 
    }
    // else i++
  }
  return pivot +1;
};

let res = removeDuplicates([1,2]);
console.log(res);