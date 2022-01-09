/*
721. Accounts Merge

Medium

https://leetcode.com/problems/accounts-merge/

[Facebook]

*/

/*
  DFS

  https://www.youtube.com/watch?v=5v6vqoJlfE4
  要点： email的无向图
  拿到email可以知道 username

  Time O(M*N) (accounts size *  list size)  
  
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  // corner case
  if(accounts == null || accounts.length == 0)
  {
    return [];
  }

  const res = [];

  // email => username
  const emailToName = new Map();   
  // email graph, email => email Set
  const emailGraph = new Map();
  // set of email
  const emails = new Set();
  // for DFS
  const visited = new Set();

  // 1. build email graph
  for(const account of accounts) {
    // account: [name, email1, email2....]
    const name = account[0];
    for(let i = 1;i < account.length; i++){
      const email = account[i];  // every email
      emails.add(email);
      emailToName.set(email, name);
      if(!emailGraph.has(email)){
        emailGraph.set(email, new Set());
      }
      if(i > 1){
        // connect every email with previous email
        emailToEmailSet.get(account[i-1]).add(email);
        emailToEmailSet.get(email).add(account[i-1]);
      }
    }
  }
  
  //2. find all connected email
  const dfs = (email, graph, visited, list) => {
      for(const nei of graph.get(email)){
        if(!visited.has(nei)){
          visited.add(nei);
          list.push(nei);
          dfs(nei, graph, visited, list)
        }
      }
  }
  //------ main, check every email
  for(const email of emails){
    if(!visited.has(email)){
       visited.add(email);
       const temp = [];  // connected component
       temp.push(email);
       dfs(email, emailGraph, visited, temp); 
       temp.sort();
       temp.unshift(emailToName.get(email))   // add username to the email list
       res.push(temp);
    }
  }
  return res;
 }
 /*
  Union-Find
  https://www.youtube.com/watch?v=SaDPCgT-EbQ&ab_channel=HuifengGuan

  • 时间复杂度union O(1), find O(1)
  • 空间复杂度O(n)
 */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  const parents = new Map(); // email to root email
  const emailToName = new Map();  
  
  const findParent =(curr)=> {
    if(parents.get(curr) != curr){
      parents.set(curr, findParent(parents.get(curr)))
    }
    return parents.get(curr);
  }

  const union = (x, y) =>{
     x = parents.get(x);
     y = parents.get(y);

    if(x < y){
      parents.set(y, x);
    }
    else{
      parents.set(x,y);
    }
  }
  // union find
  for(const account of accounts) {
    // account: [name, email1, email2....]
    const name = account[0];
    const email0 = account[1];
    if(!parents.has(email0)){
      parents.set(email0, email0);
    }
    emailToName.set(email0, name);
    // set parent of all email to email0
    for(let i = 2;i < account.length; i++){
      const email = account[i];  // every email
      emailToName.set(email, name);
      if(!parents.has(email)){
        parents.set(email, email);
      }
      if(findParent(email0)!= findParent(email)){
        union(email0, email);
      }
    }
  }
    // 2. Group the email
  const group  = new Map();  
  for(const [email, parent] of parents) {
      const rootEmail = findParent(email);
      if(!group.has(rootEmail)){
        group.set(rootEmail, [])
      }
      group.get(rootEmail).push(email);
  }

  const ans= []; 
  for(const [rootEmail, emails] of group ){
    const accountEmails = [emailToName.get(rootEmail)].concat(emails.sort());
      
    ans.push(accountEmails);
  }
  return ans;
 }

 /*

  Union-Find

 https://zxi.mytechroad.com/blog/graph/leetcode-721-accounts-merge/


 */
