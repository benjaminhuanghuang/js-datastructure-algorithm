
- 花花酱 LeetCode Binary Search
https://www.youtube.com/watch?v=v57lNF2mb_s&t=362s&ab_channel=HuaHua

- 花花酱 LeetCode Binary Search II - 刷题找工作 SP 17
https://www.youtube.com/watch?v=J-IQxfYRTto&t=205s&ab_channel=HuaHua


- 二分查找为什么总是写错？
https://www.youtube.com/watch?v=JuDAqNyTG4g

- 硅谷工程师十五分钟带你全面理解 Binary Search 
https://www.youtube.com/watch?v=U3U9XMtSxQc


-是否曾为二分搜索的边界条件而抓狂？ | 小旭讲解 基础算法系列 二分搜索之模板 - EP1
https://www.youtube.com/watch?v=PFaEzBmoATg&ab_channel=XiaoxuHu


## 特征
Input was sorted.

Time complexity  < O(N)

找到数组中的一个分割位置，使得左半部分满足某个条件，右半部分不满足(100%)

找到一个最大/最小的值使得某个条件被满足(90%)

解有可能不存在

![](./binary-search-category.png)

![](./binary-search.png)

## Template [l, r)
![](./binary-search-template.png)

f(m) 判断是否为解

g(m) 判断解在左边或右边

最终找到的 l是最小数使得g(m)为true/ 满足g(m)

![](./binary-search-template2.png)

## Template [l, r]
![](./binary-search-template1.png)


## Terminal condition
![](./bs-loop.png)


## Open / Close
![](./open-close.png)

![](./open-close2.png)

## lower / upper bound
![](./lower-upper-bound.png )

![](./lower-upper-bound2.png)


## Sample

![](./bs-sample.png)


![](./bs-sample2.png)

![](./bs-sample3.png)