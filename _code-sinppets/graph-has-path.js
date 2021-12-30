const haPath = (start, end, graph) => {
  const visited = new Set();
  if (start == end) return true;

  visited.add(start);

  if (!graph.has(start) || !graph.has(end)) return false;

  for (const next of graph.get(start)) {
    if (visited.has(next)) continue;
    if (hasPath(next, end, graph)) return true;
  }
  return false;
};
