/*
  983. Minimum Cost For Tickets

  https://leetcode.com/problems/minimum-cost-for-tickets/
*/

/*

  https://www.youtube.com/watch?v=4pY1bsBpIY4&ab_channel=NeetCode

  Decision tree
                                   day 1
            2d pass  /     7d pass  |          30d pass \
                  day4            day8                 done
                       2d pass  /   7d pass \
                          day20             done


  Time Complexity  O((1+7+30)* days)
*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
 var mincostTickets = function(days, costs) {
  const dayCosts = new Map([[1, costs[0]], [7, costs[1]], [30, costs[2]]]);
  const mem = new Map();
  // i is the index of the day
  // return the cost
  const dfs = (i) => {
    if (i == days.length) {
      return 0;
    }
    if (mem.has(i)) return mem.get(i);

    let minCost = Number.MAX_SAFE_INTEGER;
    for (const [day, cost] of dayCosts) {
      // try every ticket
      let nextIndex = i;
      while(nextIndex < days.length && days[nextIndex] < days[i] + day){
        nextIndex ++;
      }
      minCost = Math.min(minCost, cost + dfs(nextIndex));
    }
    mem.set(i, minCost);
    return minCost;
  };

  return dfs(0);
};
