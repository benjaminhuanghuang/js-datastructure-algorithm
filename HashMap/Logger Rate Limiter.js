/*
359. Logger Rate Limiter - YouTube

https://leetcode.com/problems/logger-rate-limiter/
*/

/**
 * Initialize your data structure here.
 */
 var Logger = function() {
  // Map<message, time>
  this.printed = new Map()
};

/**
* Returns true if the message should be printed in the given timestamp, otherwise returns false.
      If this method returns false, the message will not be printed.
      The timestamp is in seconds granularity. 
* @param {number} timestamp 
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (this.printed.has(message)) {
    const last = this.printed.get(message)
    if (timestamp - last < 10) {
      return false
    }
  }

  this.printed.set(message, timestamp)
  return true
};