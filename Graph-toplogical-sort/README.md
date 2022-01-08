
# Topological sorting

每个顶点出现且只出现一次；
若A在序列中排在B的前面，则在图中不存在从B到A的路径。
也可以定义为：拓扑排序是对有向无环图的顶点的一种排序，它使得如果存在一条从顶点A到顶点B的路径，那么在排序中B出现在A的后面。

Topological Sorting可以用BFS和DFS实现。

## 拓扑排序BFS算法：

统计所有点的入度，并初始化拓扑序列为空。
将所有入度为 0 的点，也就是那些没有任何依赖的点，放到宽度优先搜索的队列中
将队列中的点一个一个的释放出来，放到拓扑序列中，每次释放出某个点 A 的时候，就访问 A 的相邻点（所有A指向的点），并把这些点的入度减去 1。
如果发现某个点的入度被减去 1 之后变成了 0，则放入队列中。
直到队列为空时，算法结束，

深度优先搜索也可以做拓扑排序，不过因为不容易理解，也并不推荐作为拓扑排序的主流算法。