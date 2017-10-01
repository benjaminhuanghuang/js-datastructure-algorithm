var repeatedStringMatch = function(A, B) {
    if(A == null && B==null )
      return -1;
    
    let temp = "";
    let count = 0;
    while(temp.length < B.length)
    {
      temp+= A;
      count ++;
    }
    if(temp.indexOf(B) >= 0)
      return count;
    temp+= A;
    count ++;
    if(temp.indexOf(B) >= 0)
      return count;
    return -1;
};