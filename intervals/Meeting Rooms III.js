/*
https://leetcode.com/discuss/interview-question/613816/Google-or-Onsite-or-Meeting-Rooms-3

Given a list of intervals calendar and a number of available conference rooms. 

For each query, return true if the meeting can be added to the calendar successfully 
without causing a conflict, otherwise false. A conference room can only hold one meeting at a time.

Example 1:

Input: calendar = [[1, 2], [4, 5], [8, 10]], rooms = 1, queries = [[2, 3], [3, 4]]
Output: [true, true]
Example 2:

Input: calendar = [[1, 2], [4, 5], [8, 10]], rooms = 1, queries = [[4, 5], [5, 6]]
Output: [false, true]
Example 3:

Input:
calendar = [[1, 3], [4, 6], [6, 8], [9, 11], [6, 9], [1, 3], [4, 10]]
rooms = 3
queries = [[1, 9], [2, 6], [7, 9], [3, 5], [3, 9], [2, 4], [7, 10], [5, 9], [3, 10], [9, 10]]
Output: [false, true, false, true, false, true, false, false, false, true]

*/