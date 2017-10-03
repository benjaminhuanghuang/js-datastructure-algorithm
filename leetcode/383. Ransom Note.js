var canConstruct = function(ransomNote, magazine) {
  let dictM = {};
  for (c of magazine){
    if (c in dictM)
      dictM[c] ++ ;
    else
    dictM[c] = 1;
  }

  for (c of ransomNote)
  {
    if (! (c in dictM ) || dictM[c] < 1)
      return false;
    else
      dictM[c] --;
  }
  return true;
};