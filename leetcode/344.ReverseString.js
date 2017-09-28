var reverseString = function(s) {
  if (s == null || s.length < 2) return s;
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");
  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr.join('');
};

let res = reverseString("hello");
console.log(res);
