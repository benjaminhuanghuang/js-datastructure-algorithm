/*
  355. Design Twitter

  https://leetcode.com/problems/design-twitter/
*/

const MAX_TWEETS = 10;

var Twitter = function () {
  this.user_followers = new Map(); // id => set
  this.user_tweets = new Map(); // id=>[[time, tweet id]....]
  this.time = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.user_tweets.has(userId)) {
    this.user_tweets.set(userId, []);
  }
  const userTweets = this.user_tweets.get(userId);
  if (userTweets.length > MAX_TWEETS) {
    userTweets.shift();
  }
  userTweets.push([this.time++, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 * Retrieve the 10 most recent tweet ids in the user's news feed.
 * Each item in the news feed must be posted by users who the user followed or by the user.
 * Tweets must be ordered from most recent to least recent.
 * 
 *  注意，一定要使用[...]对array进行copy， 否则会搞乱数据
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const feed = [];

  // poste by user self;
  if (this.user_tweets.has(userId)) {
    feed.push(...this.user_tweets.get(userId));
  }
  // posted by followers
  if (this.user_followers.has(userId)) {
    for (const uid of this.user_followers.get(userId)) {
      if (this.user_tweets.has(uid)) {
        feed.push(...this.user_tweets.get(uid));
      }
    }
  }

  // sort by time
  feed.sort((f1, f2) => f2[0] - f1[0]);
  const ans = [];
  for (let i = 0; i < Math.min(MAX_TWEETS, feed.length); ++i) {
    ans.push(feed[i][1]);
  }
  return ans;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId == followeeId) return;
  if (!this.user_followers.has(followerId)) {
    this.user_followers.set(followerId, new Set());
  }
  this.user_followers.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (followerId == followeeId) return;
  if (this.user_followers.has(followerId)) {
    this.user_followers.get(followerId).delete(followeeId);
  }
};
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
