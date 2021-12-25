/*
Portals

https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=544961100246576

在grid中从S走到E
*/


/**
 * @param {number} R
 * @param {number} C
 * @param {string[][]} G
 * @return {number}
 */
 function getSecondsRequired(R, C, G) {
  // Write your code here
  let steps=0;
  const visited = Array.from(Array(R), ()=>Array(C).fill(false));
  
  const q=[];
  for(let r = 0; r < R; r++){
    for(let c= 0; c < C; c++)
    {
      if(G[r][c] == 'S')
      {
        q.push([r, c]);
        visited[r][c] =true;
        break;
      }
    }
  }
  
  const findPortals = (char, r, c, visited) => {
   const portals = [];
   for(let r = 0; r < R; r++){
      for(let c= 0; c < C; c++)
      {
        if(G[r][c] == char && !visited[r][c])
        {
          portals.push([r, c])
        }
      }
    }
    return portals;
  }
  
  while(q.length > 0){
    let size = q.length;
    while(size--){
      const [r, c] = q.shift();
      if(G[r][c] == 'E') {
          return steps;
      }
      const char = G[r][c];
      if(char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)){
         const portals = findPortals(char, r, c, visited);
         for(const p of portals){
           visited[p[0]][p[1]]= true;
           q.push(p);
         }
      }
      for(const dir of [[0,1], [-1,0], [0,-1],[1,0]]){
        const tr = r + dir[0];
        const tc = c + dir[1];

        if(tr < 0 || tr >=R || tc<0 || tc >=C || visited[tr][tc] || G[tr][tc] == '#') continue;
        visited[tr][tc] = true;
        q.push([tr, tc]);
      }
    }
    steps++;
  }
  return -1;
}
