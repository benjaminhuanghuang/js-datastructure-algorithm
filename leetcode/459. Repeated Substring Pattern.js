var repeatedSubstringPattern = function(s) {
  if(s.length < 2) 
    return false;        
  let subLen = 1;        
  while(subLen <= s.length/2)
  {            
    if(s.length % subLen ==0)
    {                
        if(check(s,subLen))           
            return true;  
    }
    subLen++;
  }       
  return false;
};
function check(str, subLength)
{       
    let n = str.length / subLength;
    for(let i = 0; i < n - 1;i ++)
    {            
        for(let j = 0; j < subLength; j++) 
        {               
            if(str[ i*subLength + j] != str[(i+1)*subLength + j])
                return false;;        
        }        
    }
    return true;
}