var readBinaryWatch = function(num) {
  let res =[];
  for(let i =0 ;i < 1024; i++)  //10 LEDs
  {
    if(countDigits(i) == num)
    {
      let time = parseTime(i);
      if(time.length > 0)
        res.push(time);
    }
  }
  return res;
}

function countDigits(num)
{
  let count = 0;
  while(num>0)
  {
    if(num & 1 ==1)
      count ++;
    num >>=1;
  }
  return count;
}

function parseTime(num)
{
  let hour = num >> 6;
  let minute = num & 0x3F;   //111111
  if(hour> 11 || minute> 59)
  {
    return "";
  }
  return `${hour}:${padDigits(minute, 2)}`;
}

function padDigits(input, length) 
{ 
    input = ""+input;
    var result = input;
    if (length > input.length) 
    { 
        for (i=0; i < (length - input.length); i++) 
        { 
            result = '0' + result; 
        } 
    } 
    return result;
} 