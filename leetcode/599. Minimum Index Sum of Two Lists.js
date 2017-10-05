/*
599. Minimum Index Sum of Two Lists
*/

var findRestaurant = function(list1, list2) {
  let res = [];
  let minSum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < list1.length; i++) {
    let index2 = list2.indexOf(list1[i]);
    if (index2 >= 0) {
      let indexSum = i + index2;
      if (indexSum < minSum) {
        res = [list1[i]];
        minSum = indexSum;
      } else if (indexSum == minSum) {
        res.push(list1[i]);
      }
    }
  }
  return res;
};
