/*


https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree-set-2-using-parent-pointer/


*/


var lowestCommonAncestor = function (root, p, q) {
   // Creata a map to store ancestors of n1
   const ancestors= new Map();
  
   // Insert n1 and all its ancestors in map
   while (n1 != NULL)
   {
       ancestors[n1] = true;
       n1 = n1.parent;
   }
  
   // Check if n2 or any of its ancestors is in
   // map.
   while (n2 != NULL)
   {
       if (ancestors.find(n2) != ancestors.end())
           return n2;
       n2 = n2.parent;
   }
  
   return NULL;
};