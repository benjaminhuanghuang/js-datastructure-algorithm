var findErrorNums = function(nums) {
  let flags = new Array(nums.length+1).fill(false);
  let res= [];
  for (num of nums)
  {
    if(flags[num])
      res.push(num);
    else
      flags[num] = true;
  }
  console.log(flags);
  for (let i = 1; i< nums.length+1; i++)
  {
    if(!flags[i])
      res.push(i);
  }
  return res;
};

console.log(findErrorNums([1,2,2,4]));