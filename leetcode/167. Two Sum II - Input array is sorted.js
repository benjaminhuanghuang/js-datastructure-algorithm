var twoSum = function(numbers, target) {
  if (numbers == null || numbers.length == 0) return [];

  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) right--;
    else if (sum < target) left++;
    else return [left + 1, right + 1];
  }
  return [];
};
