var lengthOfLastWord = function(s) {
  if(s == null || s.length == 0)
    return 0;
  let wordEnd = s.length-1;
  while(s[wordEnd] == " " && wordEnd >= 0)
  {
    wordEnd --;
  }
  if(wordEnd <0 )
    return 0;
  console.log(wordEnd);
  let wordStart = wordEnd;
  while(wordStart >= 0 && s[wordStart] != " ")
  {
    wordStart--; 
  }
  console.log(wordStart);
  return wordEnd - wordStart;  //No +1
};


console.log(lengthOfLastWord(" a"));