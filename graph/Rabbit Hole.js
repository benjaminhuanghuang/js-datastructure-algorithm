/*
Rabbit Hole
https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=316794079975021


Sample test case #1
N = 4
L = [4, 1, 2, 1]
Expected Return Value = 4
3 -> 2 -> 1 -> 4

Sample test case #2
N = 5
L = [4, 3, 5, 1, 2]
Expected Return Value = 3

Sample test case #3
N = 5
L = [2, 4, 2, 2, 3]

*/

/**
 * @param {number} N
 * @param {number[]} L
 * @return {number}
 */

function getMaxVisitableWebpages(N, L) {
  // Write your code here
  const graph = Array.from(Array(N), () => []);
  for (let i = 0; i < N; i++) {
    graph[i].push(L[i] - 1);
  }
  console.log(graph);
  let maxLength = 0;
  const visited = new Array(N).fill(false);
  const getPath = (n) => {
    const q = [n];
    visited[n] = true;
    let len = 0;
    while (q.length > 0) {
      let size = q.length;
      while (size--) {
        const curr = q.shift();
        for (const neighbour of graph[curr]) {
          if (!visited[neighbour]) {
            q.push(neighbour);
            visited[neighbour] = true;
          }
        }
      }
      len++;
    }
    console.log(n, len);
    return len;
  };

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      maxLength = Math.max(maxLength, getPath(i));
    }
  }

  return maxLength;
}

function getMaxVisitableWebpages_TEL(N, L) {
  // Write your code here
  const graph = Array.from(Array(N), () => []);
  for (let i = 0; i < N; i++) {
    graph[i].push(L[i] - 1);
  }
  console.log(graph);
  let maxLength = 0;

  const getPath = (n) => {
    const visited = new Array(N).fill(false);
    const q = [n];
    visited[n] = true;
    let len = 0;
    while (q.length > 0) {
      let size = q.length;
      while (size--) {
        const curr = q.shift();
        for (const neighbour of graph[curr]) {
          if (!visited[neighbour]) {
            q.push(neighbour);
            visited[neighbour] = true;
          }
        }
      }
      len++;
    }
    console.log(n, len);
    return len;
  };

  for (let i = 0; i < N; i++) {
    maxLength = Math.max(maxLength, getPath(i));
  }

  return maxLength;
}


function getMaxVisitableWebpages_DFS(N, L) {
  // Write your code here
  const graph = Array.from(Array(N), () => []);
  for (let i = 0; i < N; i++) {
    graph[i].push(L[i] - 1);
  }

  let maxLength = 0;
  
  const map = new Map();
  const getPath = (n, visited) => {
    
    if(map.has(n)){
      return map.get(n);
    }
    
    visited[n] = true;
    
    let maxPath = 0;
    for (const neighbour of graph[n]) {
      if (!visited[neighbour]) {
        maxPath = Math.max(maxPath, getPath(neighbour, visited));
      }
    }
   
    map.set(n, maxPath + 1);
    return maxPath  +1;
  };
  
  const visited = new Array(N).fill(false);
  for (let i = 0; i < N; i++) {
     maxLength = Math.max(maxLength, getPath(i, [...visited]));
  }

  return maxLength;
}


//const n = getMaxVisitableWebpages(5, [4, 3, 5, 1, 2]);
const n = getMaxVisitableWebpages(4, [4, 1, 2, 1]);
