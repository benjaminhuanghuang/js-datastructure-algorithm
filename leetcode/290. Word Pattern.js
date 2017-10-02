var wordPattern = function(pattern, str) {
  if(pattern == null || pattern.length ==0 || str==null || str.length ==0)
    return false;

  let wordArray = str.split(" ");
  if (pattern.length != wordArray.length)
  {
    return false;
  }
  let dictP = {};
  let dictS = {};
  for(let i =0 ; i < pattern.length ; i++)
  {
    if(pattern[i] in dictP)
    {
      if(wordArray[i] != dictP[pattern[i]])
        return false;
    }
    else{
        dictP[pattern[i]] = wordArray[i];
    }

    if(wordArray[i] in dictS)
    {
      if(pattern[i] != dictS[wordArray[i]])
        return false;
    }
    else{
        dictS[wordArray[i]] = pattern[i];
    }
  }

  return true;
};

let res = wordPattern("abba","dog cat cat dog");

console.log(res);