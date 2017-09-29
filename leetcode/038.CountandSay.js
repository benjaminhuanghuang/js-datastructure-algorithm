var countAndSay = function(n) {
  let start = "1";
  while(--n > 0)
  {
    start = sayNext(start);
  }
  return start;
};

function sayNext(start)
{
  let pre = 0;
  let res = "";
  for(let i =0;i < start.length; i++)
  {
    if(start[i] != start[pre])
    {
      let count = i -pre;
      res += count
      res += start[pre];
      pre =i;
    }
  }
  res += start.length - pre;
  res += start[pre];
  return res;
}


let res = countAndSay(4);
console.log(res);