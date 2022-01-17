/*
346. Moving Average from Data Stream

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

[Google, FB]

https://leetcode.com/problems/moving-average-from-data-stream/

*/


class MovingAverage {
 constructor (size) {
    this.size = size;
    this.q = [];
    this.winSum = 0;
  }
  next(val) {
    // calculate the new sum by shifting the window
    queue.add(val);
    let poll = 0;
    if(this.q.length > size){
      poll = q.shift();
    }
    windowSum = windowSum - tail + val;
    return windowSum / Math.min(this.size, this.q.length);
  }
}