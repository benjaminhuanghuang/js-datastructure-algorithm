/*
811. Subdomain Visit Count

Level: Easy

https://leetcode.com/problems/subdomain-visit-count
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let hash = {};
  let output = [];
  for (let i = 0; i < cpdomains.length; i++) {
    let num = parseInt(cpdomains[i].split(" ")[0]);
    let sub = cpdomains[i].split(" ")[1];

    do {
      if (hash[sub] === undefined) hash[sub] = num;
      else hash[sub] += num;
      sub = sub.substring(sub.indexOf(".") + 1);
    } while (sub.indexOf(".") !== -1);
    sub = sub.substring(sub.indexOf(".") + 1);
    if (hash[sub] === undefined) hash[sub] = num;
    else hash[sub] += num;
  }
  for (let item in hash) {
    let s = hash[item] + " " + item;
    output.push(s);
  }
  return output;
};
