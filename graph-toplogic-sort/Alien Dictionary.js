/*
269. Alien Dictionary

Hard

https://leetcode.com/problems/alien-dictionary/


*/

/*

https://medium.com/@timothyhuang514/graph-alien-dictionary-d2b104c36d8e


Build graph
Identify vertices that have no incoming edge
Repeatedly pick vertex of in-degree 0 and append it to the output


Time Complexity: O(|V| + |E|)
The time it takes to build a graph would be O(|E|) since we need to traverse through 
all the edges and initializing a queue that has vertices w in-degree 0 would take O(|V|) 
assuming we have V vertices. Lastly, dequeue and output the vertices would take O(|V|) 
as well since dequeueing and outputting each vertex are linear time.

Space Complexity: O(|V|)
The memory needed for this problem would be the in-degree array and a dictionary containing 
all the vertices as keys and vertices they're sourcing to as values. Both would take O(|V|)


*/

/*
https://www.youtube.com/watch?v=6kTZYvNNyps&ab_channel=NeetCode

*/
/**
 * @param {string[]} words
 * @return {string}
 */

var alienOrder = function (words) {};
