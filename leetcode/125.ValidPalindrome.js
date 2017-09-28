var isPalindrome = function(s) {
  if (s == null || s.length == 0) return true;
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && alphanumeric(s[left])) {
      left++;
    }
    while (left < right && alphanumeric(s[right])) {
      right--;
    }
    if (left >= right)
    {
        return true;
    }
    if(s[left] != s[right])
      return false;
    left++;
    right--;
  }
  return turn;
};

function alphanumeric(text) {
  var letterNumber = /^[0-9a-zA-Z]+$/;
  return text.match(letterNumber);
}
