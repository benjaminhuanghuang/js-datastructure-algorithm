/*
621. Task Scheduler
*/

var leastInterval = function(tasks, n) {
  let taskCount = {};
  for(t of tasks)
  {
    if(t in taskCount)
      taskCount[t] ++;
    else
      taskCount[t] = 1;
  }
  let maxCount=0;
  for(k in taskCount)
    maxCount = Math.max(maxCount, taskCount[k]);

  let slots = (maxCount - 1) * n;


};

let res = leastInterval(['A','A','A','B','B','B'], 2);
console.log(res);
