var reverseVowels = function(s) {
  if(s == null || s.length == 0)
    return s;

  let charArr = s.split('');
  let left = 0;
  let right = s.length - 1;
  while(left < right)
  {
    while(left< right && "aeiouAEIOU".indexOf(charArr[left]) < 0)
    {
      left++;
    }
    while(left< right && "aeiouAEIOU".indexOf(charArr[right]) < 0)
    {
      right--;
    }
    let temp = charArr[left];
    charArr[left] = charArr[right];
    charArr[right] = temp;
    left++;
    right--;
  }
  return charArr.join('');
};