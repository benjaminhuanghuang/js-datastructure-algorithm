


function binary_search(arr, target){
  let l = 0,
    r = arr.length;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if(l > 0)
    l--;
  return arr[l];
}


let res = binary_search([1],1)
console.log(res)

res = binary_search([1,4],4)
console.log(res)
