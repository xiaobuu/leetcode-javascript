/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var sortPeople = function(a, b) {
    return b[0] - a[0] || a[1] - b[1]
}
var reconstructQueue = function(people) {
   people.sort(sortPeople);
   var i;
   var res = [];
   for(i = 0; i < people.length; i++) {
       res.splice(people[i][1], 0, people[i]);
   }
   return res;
};
