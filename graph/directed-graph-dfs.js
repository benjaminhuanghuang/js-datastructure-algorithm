/*

Undirected Graph:
The data structure is represented by 
    an adjacency matrix (that is, a two-dimensional array) and an adjacency list. 
Each node is called a vertex, and two adjacent nodes are called edges.
 
Undirected Graph No direction : A -> B = B -> A

*/

class Vertex {
  constructor(data, visited) {
    this.data = data;
    this.visited = visited; // Have you visited
  }
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }
  isVisited() {
    return this.visited;
  }
  setVisited(visited) {
    this.visited = visited;
  }
}

class Stack {
  constructor() {
    this.stacks = new Array();
    this.top = -1;
  }
  push(element) {
    this.top++;
    this.stacks[this.top] = element;
  }
  pop() {
    if (this.top == -1) {
      return -1;
    }
    var data = this.stacks[this.top];
    this.top--;
    return data;
  }
  peek() {
    if (this.top == -1) {
      return -1;
    }
    var data = this.stacks[this.top];
    return data;
  }
  isEmpty() {
    if (this.top <= -1) {
      return true;
    }
    return false;
  }
}

class Graph {
  // create empty data structure for graph
  constructor(maxVertexSize) {
    this.maxVertexSize = maxVertexSize; // Two-dimensional array size
    this.vertexs = new Array(maxVertexSize);

    this.size = 0; // Current vertex size
    
    // adjacency matrix
    this.adjacencyMatrix = new Array(maxVertexSize);
    for (var i = 0; i < maxVertexSize; i++) {
      this.adjacencyMatrix[i] = new Array();
      for (var j = 0; j < maxVertexSize; j++) {
        this.adjacencyMatrix[i][j] = 0;
      }
    }
    this.stack = new Stack(); // Stack saves current vertices
  }

  addVertex(data) {
    var vertex = new Vertex(data, false);
    this.vertexs[this.size] = vertex;
    this.size++;
  } 
  
  // Add adjacent edges
  addEdge(from, to) {
    // A -> B = B -> A
    this.adjacencyMatrix[from][to] = 1;
    this.adjacencyMatrix[to][from] = 1;
  }

  depthFirstSearch() {
    // Start searching from the first vertex
    var firstVertex = this.vertexs[0];
    firstVertex.setVisited(true);
    this.stack.push(0);
    
    while (!this.stack.isEmpty()) {
      var row = this.stack.peek(); // Get adjacent vertex positions that have not been visited
      var col = this.findAdjacencyUnVisitedVertex(row);
      if (col == -1) {
        this.stack.pop();
      } else {
        this.vertexs[col].setVisited(true);
        this.stack.push(col);
      }
    }
    this.clear();
  } 
  
  // Get adjacent vertex positions that have not been visited
  findAdjacencyUnVisitedVertex(row) {
    for (var col = 0; col < this.size; col++) {
      if (this.adjacencyMatrix[row][col] == 1 && !this.vertexs[col].isVisited()) {
        return col;
      }
    }
    return -1;
  } 
  
  // Clear reset
  clear() {
    for (var i = 0; i < this.size; i++) {
      this.vertexs[i].setVisited(false);
    }
  }
  
  getAdjacencyMatrix() {
    return this.adjacencyMatrix;
  }
  
  getVertexs() {
    return this.vertexs;
  }
}

//////////////////////testing////////////////////
function printGraph(graph) {
  console.log("Two-dimensional array traversal output vertex edge and adjacent array :  <br>");
  for (var i = 0; i < graph.getVertexs().length; i++) {
    console.log(graph.getVertexs()[i].getData() + "  ");
  }
  console.log("<br>");
  for (var i = 0; i < graph.getAdjacencyMatrix().length; i++) {
    console.log(graph.getVertexs()[i].getData() + "  ");
    for (var j = 0; j < graph.getAdjacencyMatrix().length; j++) {
      console.log(graph.getAdjacencyMatrix()[i][j] + "  ");
    }
    console.log("<br>");
  }
}

var graph = new Graph(5);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4); // Two-dimensional array traversal output vertex edge and adjacent array
printGraph(graph);
console.log("<br>Depth-first search traversal output : <br>");
graph.depthFirstSearch();
