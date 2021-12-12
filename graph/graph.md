## Undirected Graph
The data structure is represented by an **adjacency matrix** (that is, a two-dimensional array) and an adjacency list. 

Each node is called a vertex, and two adjacent nodes are called edges

顶点（vertex） 个数 = size of 2-D array(adjacency matrix)

## Depth-first search

Look for the neighboring edge node B from A and then find the neighboring node C from B and so on until all nodes are found

Use a Stack


## Dijkstra's algorithm (Short path)
  minHeap  (path, node)

  Time complexity O(E * logV)
  
  Space complexity O(N +E)
