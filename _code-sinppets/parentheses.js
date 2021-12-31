const isValid = (s) => {
  let count = 0;
  for (const c of s) {
    if (c == "(") count++;
    if (c == ")") count--;
    if (count < 0) return false;
  }
  return count == 0;
};

// find Index Of Right Parenthese
function findClosing(s) {
  let level = 0, i = 0;
  for (i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '(')
          level++;
      else if (s.charAt(i) == ')') {
          level--;
          if (level == 0)
              break;
      }
  }
  return i;
}