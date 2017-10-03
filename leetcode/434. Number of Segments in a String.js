var countSegments = function(s) {
  s = s.trim();  
  if(s.length==0)   
      return 0;  
  let result = 0, flag = 0;  
  for (let i = 0; i < s.length; i++) {  
      if (s[i] == ' ' && flag == 0) {  
          result++;  
          flag = 1;  
      }  
      if (s[i] != ' ')  
          flag = 0;  
  }  
  return result + 1;  
};