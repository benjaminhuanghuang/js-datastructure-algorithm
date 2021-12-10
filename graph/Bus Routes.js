/*
815. Bus Routes

https://leetcode.com/problems/bus-routes/
*/

/*
  https://www.youtube.com/watch?v=vEcm5farBls&ab_channel=HuaHua
  尽量少的换乘次数
  因为是环线，所以可以是无向图

  Time Complexity: O(m*n)            // m: # of buses, n: # of routes

  Space complexity: O(m*n + m)
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source == target) return 0;

  const graph = new Map(); // stop -> [bus]
  for (let bus = 0; bus < routes.length; ++bus) {
    for (const stop of routes[bus]) {
      if (!graph.has(stop)) {
        graph.set(stop, []);
      }
      graph.get(stop).push(bus);
    }
  }
  const visited = new Array(routes.length).fill(false);

  const q = [source];
  let buses = 0;

  while (q.length > 0) {
    let size = q.length;
    ++buses;
    while (size--) {
      const currStop = q.shift();
      for (const bus of graph.get(currStop)) {
        if (visited[bus]) continue;
        visited[bus] = true;
        for (const stop of routes[bus]) {
          if (stop == target) return buses;
          q.push(stop);
        }
      }
    }
  }
  return -1;
};
