/**
 * Course Schedule
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 * 
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 *              To take course 1 you should have finished course 0. So it is possible.
 *              
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 *              To take course 1 you should have finished course 0, and to take course 0 you should
 *              also have finished course 1. So it is impossible.
 * 
 * Constraints:
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input prerequisites.
 * 1 <= numCourses <= 10^5
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

//check for circular references
//it feels like  a linked list might be the best solution, but one course could have several prerequisites
var canFinish = function(numCourses, prerequisites) {
  let prMap = {};
  for (let i = 0; i < prerequisites.length; i++) {
    let [a,b] = prerequisites[i];
    if (a in prMap) {
      prMap[a].push(b);
    } else {
      prMap[a] = [b];
    }
  }
  let checked = new Set();
  var recurse = function(node, check, visited = []) {
    if (prMap[node] === undefined || check.has(node)) return true;
    if (visited.includes(node)) return false;
    visited.push(node);
    return prMap[node].map((a, index) => {
        let result = recurse(a, checked, [...visited])
        if (index === prMap[node].length - 1) checked.add(node);
        return result;
      }).reduce((a,b) => a && b, true)
  }
  for (var course in prMap) {
    if (!recurse(course,checked)) return false;
  }
  return true;
};
