/*
670. Maximum Swap

https://leetcode.com/problems/maximum-swap/
*/

/*
需要交换位置的一定是逆序对。在所有的逆序对里面怎么选择产生最大结果的swap呢？
假设数组中的最大元素是a，那么首先看a之前有没有比a小的数，
如果有，则将第一个比a小的数和a交换即可；
如果没有，则说明a无法参与交换，这样就再看次大元素b，采用和a同样的处理方法类推即可。

如果从后往前扫描，则只需要进行一遍扫描：我们记录一个截止当前的最大值和其对应位置，
再记录一下当前参与交换的两个数的值和对应位置。扫描的过程中，如果遇到比最大值还大的数出现，
则更新最大值及其对应位置；否则如果发现当前数比截止当前的最大值小，那么就更新swap为当前数和当前最大数之间的swap。这样最终结果就是最佳的swap。算法的空间复杂度是O(n)，时间复杂度也是O(n)。
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const s = num.toString();
  const length = s.lenght;

  let max_index = -1,
    max_digit = -1;
  let left_index = -1,
    right_index = -1;
  for (let i = length - 1; i >= 0; --i) {
    if (s[i] > max_digit) {
      // found the largest num so far
      max_digit = s[i];
      max_index = i;
      continue;
    }
    if (s[i] < max_digit) {
      left_index = i;
      right_index = max_index;
    }
  }
  if (left_index == -1) {
    return num;
  }
  const tmp = s[left_index];
  s[left_index] = s[right_index];
  s[right_index] = tmp;
  return Number.parseInt(s);
};
