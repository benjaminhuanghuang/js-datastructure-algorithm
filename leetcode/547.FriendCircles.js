
/*
  Category: Graph, undirected graph
  Ref: 200 Number of Islands
  Solution: find connected component in graph
  Time complexity O(n^2)

  Given a node, find the maximal connected components and mark all nodes in this as visited.
  A single node is a component
*/
var findCircleNum = function(M) {
  if(M == 0)
    return 0;

  let studentCount = M.length;
  if (studentCount < 1)
    return 0;

  let visited = new Array(studentCount).fill(false);
  let cycle = 0;
  for (let i =0; i< studentCount; i++)
  {
    if(!visited[i])
    {
      cycle++;   // a single student is a cycle 
      visited[i] = true;
      dfs(M, visited, i);
    }
  }
  return cycle;
};

function dfs(M, visited, i)
{
  for(let j=0; j <M.length;j++)
  {
    if(!visited[j] && M[i][j] == 1)
    {
      visited[j] = true;
      dfs(M, visited, j);
    }
  }
}