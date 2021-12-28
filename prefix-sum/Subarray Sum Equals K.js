/*
560. Subarray Sum Equals K

Medium

https://leetcode.com/problems/subarray-sum-equals-k/

*/

/* 1.   Brute Force : Time Limit Exceeded
  https://www.youtube.com/watch?v=aYfwus5T3Bs&ab_channel=%E6%9D%A5Offer-LaiOffer


  For every pair(i,j) check sum of nums[i:j]

  Time complexity: O(n^3)
  Space complexity: O(1)


  思路： identity the repeated computation
*/

/* 2. prefix sum : Time Limit Exceeded
  https://www.youtube.com/watch?v=aYfwus5T3Bs&ab_channel=%E6%9D%A5Offer-LaiOffer


  Time complexity: O(n^2)
  Space complexity: O(1)
*/

var subarraySum = function (nums, k) {
  if (nums.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let prefixSum = 0;
    for (let j = i; j < nums.length; j++) {
      prefixSum += nums[j];
      if (prefixSum == k) {
        count++;
      }
    }
  }
  return count;
};

/* 3. prefix sum array / Running Prefix sum
  https://www.youtube.com/watch?v=aYfwus5T3Bs&ab_channel=%E6%9D%A5Offer-LaiOffer

  prefixSum array : 用于解决和 sum of subarray 相关问题
    prefixSum[x] = sum of subArray(0, x) = prefixSum[x - 1] + nums[x]

    重点：
      prefixSum[j]   = nums[0]........+ nums[i-1] + nums[i]....+nums[j]
      prefixSum[i-1] = nums[0]........+ nums[i-1]
      因此
      sum of subarray(i,j) = prefixSum[j] - prefixSum[i-1]    // 注意是prefixSum[i-1]
  
  问题转化为： how many [i,j] pairs , prefixSum[i] - prefixSum[j] = k

  use map to record prefixSum -> occurrency of the prefixSum value

  简化：
    因为使用了map， 不再需要 prefix sum array

  Time complexity: O(n)
  Space complexity: O(n)
*/
var subarraySum = function (nums, k) {
  if (nums.length === 0) return 0;

  const sums = new Map(); // 记录prefixSum出现的value和个数
  let prefixSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (sums.has(prefixSum - k)) {
      // prefixSum[i] - prefixSum[j] = k
      count += sums.get(prefixSum - k);
    }
    if (sums.has(prefixSum)) {
      sums.set(prefixSum, sums.get(prefixSum) + 1);
    } else {
      sums.set(prefixSum, 1);
    }
  }
  return count;
};

/*

https://zxi.mytechroad.com/blog/hashtable/leetcode-560-subarray-sum-equals-k/

prefix_sum[i] = sum(nums[0: i-1])

check how many prefix sum(j) equal to sum -k
for every 
Time complexity: O(n)

Space complexity: O(n)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.empty()) return 0;
  //// 记录prefixSum出现的value和个数
  const counts = new Map();
  counts.set(0,1);
  let cur_sum = 0;
  let ans = 0;
  for (const num of nums) {
    cur_sum += num;
    ans += counts[cur_sum - k];
    ++counts[cur_sum];
  }
  return ans;
};


/*
https://www.youtube.com/watch?v=fFVZt-6sgyo&ab_channel=NeetCode

*/


