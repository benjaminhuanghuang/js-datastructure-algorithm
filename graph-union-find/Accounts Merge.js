/*
721. Accounts Merge

https://leetcode.com/problems/accounts-merge/
*/

/*
  DFS
  https://www.youtube.com/watch?v=5v6vqoJlfE4
  要点： email的无向图
  
  Time O(M*N) (accounts size *  list size)  
  
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  const res = [];

  // corner case
  if(accounts == null || accounts.length == 0)
  {
    return res;
  }
  const emailToName = new Map();   
  const emailToEmailSet = new Map();   // 无向图
  const emails = new Set();
  const visited = new Set();

  for(const account of accounts) {
    const name = account[0];
    for(let i = 1;i < account.length; i++){
      const email = account[i];
      emails.add(email);
      emailToName.set(email, name);
      if(!emailToEmailSet.has(email)){
        emailToEmailSet.set(email, new Set());
      }
      if(i > 1){
        emailToEmailSet.get(account[i-1]).add(email);
        emailToEmailSet.get(email).add(account[i-1]);
      }
    }
  }
  
  // find all connected email
  const dfs = (email, graph, visited, list) => {
      for(const nei of graph.get(email)){
        if(!visited.has(nei)){
          visited.add(nei);
          list.push(nei);
          dfs(nei, graph, visited, list)
        }
      }
  }

  for(const email of emails){
    if(!visited.has(email)){
       visited.add(email);
       const temp = [];
       temp.push(email);
       dfs(email, emailToEmailSet, visited, temp); 
       temp.sort();
       temp.unshift(emailToName.get(email))   // add username
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