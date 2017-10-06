/*
520. Detect Capital
*/

var detectCapitalUse = function(word) {
  if(word == null)
    return false;
  let lowerCase = word.toLowerCase();
  let upperCase = word.toUpperCase();
  
  if(word == upperCase || word == lowerCase)
    return true;

  for(let i =0 ;i< word.length ; i++)
  {
    if(i == 0 && word[i] != upperCase[i])
      return false;
    if(i > 0 && word[i] != lowerCase[i])
      return false;
  }
  return true;
};