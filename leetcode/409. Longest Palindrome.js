var longestPalindrome = function(s) {
  let max = 0;
  let dict = {};
  for (let i= 0 ; i< s.length; i++)
  {
    if(s[i] in dict)
      dict[s[i]] ++;
    else
      dict[s[i]] =1;
  }
  let hasSingle = false;
  for(k in dict)
  {
    let count = dict[k];
    if(count %2 == 1)
      hasSingle = true;
    max += parseInt(count / 2);
  }
  max = max *2;
  if(hasSingle)
    max +=1;
  return max;
};

let res = longestPalindrome("abccccdd");