## 常见算法

### DFS (Depth first search) 
Look for the neighboring edge node B from A and then find the neighboring node C from B and so on until all nodes are found

Time O(N) N is the number of the nods in the graph

Need Set() to detect sycle

Use a Stack or recusrion

###  BFS (Breadth first search)

Time O(N)  N is the number of the nods in the graph

use Queue()

Need Set() to detect sycle

### Union-Find
The number of the connected components of the graph

Time O(NlogN)


### Topologicsl Sort

DFS

Time O(N)

use Set() to detect sycle



## Undirected Graph
The data structure is represented by an **adjacency matrix** (that is, a two-dimensional array) and an adjacency list. 

Each node is called a vertex, and two adjacent nodes are called edges

顶点（vertex） 个数 = size of 2-D array(adjacency matrix)


## Resources
- Top 5 Most Common Graph Algorithms for Coding Interviews
https://www.youtube.com/watch?v=utDu3Q7Flrw&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI&index=1&ab_channel=NeetCode
