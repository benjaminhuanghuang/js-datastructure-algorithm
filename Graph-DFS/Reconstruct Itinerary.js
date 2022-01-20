/*
332. Reconstruct Itinerary

https://leetcode.com/problems/reconstruct-itinerary/
*/

/*
  https://www.youtube.com/watch?v=LKSdX31pXjY&t=436s&ab_channel=%E6%9D%A5Offer-LaiOffer

  graph, 快速知道所连接的邻居
  back track
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  if (tickets.length == 0) return [];

  const totalLen = tickets.length + 1;
  // Build graph
  const graph = new Map();

  for (const [start, end] of tickets) {
    if (!graph.has(start)) {
      graph.set(start, []);
    }
    graph.get(start).push(end);
  }

  // Sort
  for (const [start, ends] of graph) {
    ends.sort();
  }

  const result = ["JFK"];

  const dfs = (start, path) => {
    if (path.length === totalLen) {
      return true;
    }

    if (!graph.has(start)) {
      return false;
    }

    const destinations = graph.get(start);
    for (let i = 0; i < destinations.length; i++) {
      const dest = destinations[i];
      destinations.splice(i, 1);
      path.push(dest);
      if (dfs(dest, path)) {
        return true;
      }
      path.pop();
      destinations.splice(i, 0, dest);
    }
  };
  if (dfs("JFK", result)) {
    return result;
  }
  return [];
};
