/*

Directed Graph Topological Sorting:
Sort the vertices in the directed graph with order of direction

1. Find no successor vectex. if not, that determine there is a ring.
2. remove the no successor vectex
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

class Graph {
  constructor(maxVertexSize) {
    this.maxVertexSize = maxVertexSize; // Two-dimensional array size
    this.vertexs = new Array(maxVertexSize);
    this.topologys = new Array();
    this.adjacencyMatrix = new Array(maxVertexSize);
    for (var i = 0; i < maxVertexSize; i++) {
      this.adjacencyMatrix[i] = new Array();
      for (var j = 0; j < maxVertexSize; j++) {
        this.adjacencyMatrix[i][j] = 0;
      }
    }
    this.size = 0;
  }
  addVertex(data) {
    var vertex = new Vertex(data, false);
    this.vertexs[this.size] = vertex;
    this.size++;
  } 
  
  // Add adjacent edges
  addEdge(from, to) {
    // A -> B  and B -> A are different
    this.adjacencyMatrix[from][to] = 1;
  }

  topologySort() {
    while (this.size > 0) {
      var noSuccessorVertex = this.getNoSuccessorVertex(); // Get a no successor node
      if (noSuccessorVertex == -1) {
        console.log("There is ring in Graph ");
        return;
      } 
      
      // Copy the deleted node to the sorted array
      this.topologys[this.size - 1] = this.vertexs[noSuccessorVertex];
      this.removeVertex(noSuccessorVertex); // Delete no successor node
    }
  }

  getNoSuccessorVertex() {
    for (var row = 0; row < this.size; row++) {
      // For each vertex
      let existSuccessor = false; 
      //If the node has a fixed row, each column has a 1, indicating that the node has a successor, terminating the loop
      for (var col = 0; col < this.size; col++) {
        if (this.adjacencyMatrix[row][col] == 1) {
          existSuccessor = true;
          break;
        }
      }
      if (!existSuccessor) {
        // If the node has no successor, return its subscript
        return row;
      }
    }
    return -1;
  }

  removeVertex(vertex) {
    if (vertex != this.size - 1) {
      //If the vertex is the last element, the end
      for (var i = vertex; i < this.size - 1; i++) {
        // The vertices are removed from the vertex array
        this.vertexs[i] = this.vertexs[i + 1];
      }
      
      for (var row = vertex; row < this.size - 1; row++) {
        // move up a row
        for (var col = 0; col < this.size - 1; col++) {
          this.adjacencyMatrix[row][col] = this.adjacencyMatrix[row + 1][col];
        }
      }
      for (var col = vertex; col < this.size - 1; col++) {
        // move left a row
        for (var row = 0; row < this.size - 1; row++) {
          this.adjacencyMatrix[row][col] = this.adjacencyMatrix[row][col + 1];
        }
      }
    }
    this.size--; // Decrease the number of vertices
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
  getTopologys() {
    return this.topologys;
  }
}

//////////////////////testing////////////////////
function printGraph(graph) {
  console.log("Two-dimensional array traversal output vertex edge and adjacent array :  <br>");
  console.log("&nbsp;&nbsp;&nbsp;");
  for (var i = 0; i < graph.getVertexs().length; i++) {
    console.log(graph.getVertexs()[i].getData() + "&nbsp;&nbsp;&nbsp;&nbsp;");
  }
  console.log("<br>");

  for (var i = 0; i < graph.getAdjacencyMatrix().length; i++) {
    console.log(graph.getVertexs()[i].getData() + "  ");
    for (var j = 0; j < graph.getAdjacencyMatrix().length; j++) {
      console.log(graph.getAdjacencyMatrix()[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;");
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

console.log("<br>Depth-First Search traversal output : <br>");
console.log("Directed Graph Topological Sorting:<br>");

graph.topologySort();
for (var i = 0; i < graph.getTopologys().length; i++) {
  console.log(graph.getTopologys()[i].getData() + " -> ");
}
