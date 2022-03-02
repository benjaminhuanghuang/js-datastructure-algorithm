/*

Lintcode 215 限制器

Implement a rate limiter, provide one method:
is_ratelimited(timestamp, event, rate, increment).

timestamp: The current timestamp, which is an integer and in second unit.

event: The string to distinct different event. for example, "login" or "signup".

rate: The rate of the limit. 1/s (1 time per second), 2/m (2 times per minute), 10/h (10 times per hour), 100/d (100 times per day). The format is [integer]/[s/m/h/d].

increment: Whether we should increase the counter. (or take this call as a hit of the given event)

The method should return true or false to indicate the event is limited or not.

*/

/**
 * @param timestamp the current timestamp
 * @param event the string to distinct different event
 * @param rate the format is [integer]/[s/m/h/d]
 * @param increment whether we should increase the counter
 * @return true or false to indicate the event is limited or not
 */
function isRatelimited(timestamp, event, rate, increment) {
  // write your code here
  let pos = rate.find("/");
        let times = parseInt(rate.substring(0, pos));
        let per = rate.substr(pos+1, rate.length);
        let delta = 0;
        if (per == "s") {
            delta = 1;
        } else if (per == "m") {
            delta = 60;
        } else if (per == "h") {
            delta = 60 * 60;
        } else {
            delta = 60 * 60 * 24;
        }
        
        let total = 0;
        // 只从大于等于 timestamp - delta + 1 的 key 开始扫描
        for(map<int, int>::iterator iter = count[event].lower_bound(timestamp-delta+1); 
        iter != count[event].end(); 
        iter++) {
            total += iter->second;
        }

      let result = total >= times;
        if (increment && !result) {
            count[event][timestamp]++;
        }
        return result;
}
