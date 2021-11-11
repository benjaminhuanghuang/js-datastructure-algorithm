function subsetHelper(result, pos, list, nums) {
  result.add(list);

  for (let i = pos; i < nums.length; i++) {
    if (i != pos && nums[i] == nums[i - 1]) {
      continue;
    }

    list.push(nums[i]);

    subsetHelper(result, pos + 1, list, nums);

    list.pop(list.length - 1);
  }
}
