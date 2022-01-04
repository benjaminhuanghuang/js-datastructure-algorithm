

![](./string-search.png)

Two Stages:
1. pre-process: table building O(M)
2. Matching O(N)

Space complexity O(M)



移动位数 = 已匹配的字符数 - 对应的部分匹配值

## 部分匹配表 是如何产生的。
首先，要了解两个概念："前缀"和"后缀"。 
"前缀"指除了最后一个字符以外，一个字符串的全部头部组合；
"后缀"指除了第一个字符以外，一个字符串的全部尾部组合。


## Leetcode
- 28.
- 459.
- 1393.
