const isValid = (s) => {
  let count = 0;
  for (const c of s) {
    if (c == "(") count++;
    if (c == ")") count--;
    if (count < 0) return false;
  }
  return count == 0;
};
