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
      const email = account[i];  // first email
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

 https://zxi.mytechroad.com/blog/graph/leetcode-721-accounts-merge/


 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  const ids = new Map();   // email to id
  const names = new Map(); // id to name
  const p = new Array(10000).fill(0);
  


  const find = (x) => {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
  };
  
  const getIdByEmail = (email) => {
    auto it = ids.find(email);
    if (it == ids.end()) {
      int id = ids.size();
      return ids[email] = id;
    }
    return it->second;
  };

  for (const auto& account : accounts) {      
    int u = find(getIdByEmail(account[1]));      
    for (int i = 2; i < account.size(); ++i) 
      p[find(u)] = find(getIdByEmail(account[i]));      
    names[find(u)] = string_view(account[0]);
  }

  unordered_map<int, set<string>> mergered;
  for (const auto& account : accounts)
    for (int i = 1; i < account.size(); ++i) {
      int id = find(getIdByEmail(account[i]));
      mergered[id].insert(account[i]);
    }    

  vector<vector<string>> ans;
  for (const auto& kv : mergered) {
    ans.push_back({string(names[kv.first])});
    ans.back().insert(ans.back().end(), kv.second.begin(), kv.second.end());
  }

  return ans;
};