/*
  
  Connected Component in Undirected Graph

*/



/*
  BFS
*/


function connectedSet(nodes) {
  const res = [];
  const visited = new Set();
  for(const node of nodes){
      if(set.contains(node)) continue;
      res.push(bfs(node, visted));
  }
  return res;
}

function bfs(node, visited){
  
  const q = [node];
  const component = [node.label];
  visited.add(node);

  while(q.length > 0){
      const curr = q.shift();
      for(const neighbour of curr.neighbours){
          if(set.has(neighbour)) continue;
          q.offer(neigh);
          set.add(neigh);
          component.push(neigh.label);
      }
  }
  component.sort();
  return component;
}