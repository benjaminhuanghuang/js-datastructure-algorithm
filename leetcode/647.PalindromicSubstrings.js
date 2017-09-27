var countSubstrings = function(s) {
  if (s == null || s.length == 0) return 0;

  let res = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    //itself;
    res++;
    //odds
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < len && s[left] == s[right]) {
      left--;
      right++;
      res++;
    }
    // evens
    left = i;
    right = i + 1;
    while (left >= 0 && right < len && s[left] == s[right]) {
      left--;
      right++;
      res++;
    }
  }
  return res;
};

let res = countSubstrings("abba");
