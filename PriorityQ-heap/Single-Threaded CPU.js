/*
1834. Single-Threaded CPU

https://leetcode.com/problems/single-threaded-cpu/

[Google]


*/

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  // 1. add index to task and sor it by the enqueueTime
  tasks = tasks
    .map(([enqueueTime, processingTime], i) => [enqueueTime, processingTime, i])
    .sort((t1, t1) => t2[0] - t1[0]);

  let pq = new MinPriorityQueue({ priority: ([e, p, idx]) => p + 10 ** -7 * (idx + 1) });

  let curtime = A[A.length - 1][0];
  let res = [];

  while (tasks.length || pq.size()) {
    while (tasks.length && curtime >= tasks[A.length - 1][0]) {
      //get everything available inside the pq
      pq.enqueue(A.pop());
    }
    if (pq.size()) {
      //make the selection
      let [e, p, idx] = pq.dequeue()["element"];
      curtime += Number(p);
      res.push(idx);
    } else if (tasks.length)
      //otherwise, increment time for the next element.
      curtime = tasks[tasks.length - 1][0];
  }
  return res;
};
