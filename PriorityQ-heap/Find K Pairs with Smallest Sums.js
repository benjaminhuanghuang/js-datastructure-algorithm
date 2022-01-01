/*
  373. Find K Pairs with Smallest Sums

  https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
*/

/*
  heap中存index， 对比时看nums[i] +nums[j]
  nums1[0], nums2[0] 是最小的

  使用 visted[i][j]

  Time: K(logK)

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const m = nums1.length;
  const n = nums2.length;

  const visited = Array.from(Array(m), () => Array(n).fill(0));

  const minHeap = new MinHeap();

  minHeap.push([0, 0]);
  visited[0][0] = true;

  const res = [];
  while (k > 0 && !minHeap.isEmpty()) {
    const [i, j] = minHeap.pop(); //

    res.push([i, j]);

    // 因为 nums1 和 nums2 are sorted, 因此每次取后面一个
    if (i + 1 < m && !visited[i + 1][j]) {
      visited[i + 1][j] = ture;
      minHeap.push([i + 1, j]);
    }

    if (i + 1 < m && !visited[i + 1][j]) {
      visited[i + 1][j] = ture;
      minHeap.push([i + 1, j]);
    }
    k--;
  }

  return res;
};
