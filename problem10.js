/**
 * In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
 * 
 * If the town judge exists, then:
 * 
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 * You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
 * 
 * If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
 * 
 * Example 1:
 * Input: N = 2, trust = [[1,2]]
 * Output: 2
 * 
 * Example 2:
 * Input: N = 3, trust = [[1,3],[2,3]]
 * Output: 3
 * 
 * Note:
 * 1 <= N <= 1000
 * trust.length <= 10000
 * trust[i] are all different
 * trust[i][0] != trust[i][1]
 * 1 <= trust[i][0], trust[i][1] <= N
 * 
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// map trust relationships
// anyone who trusts can't be judge
//judge has to be trusted by everyone, so get count


var findJudge = function(N, trust) {
  if (N === 1) return 1;
  const trustCounts = {};
  const town = [...new Array(N+1).keys()];
  town.shift();
  const nonTrusters = new Set(town);
  const result = [];
  for (let i = 0; i < trust.length; i ++) {
    trustCounts[trust[i][1]] = trust[i][1] in trustCounts ? trustCounts[trust[i][1]] + 1 : 1;
    nonTrusters.delete(trust[i][0])
  }
  nonTrusters.forEach(a => {
    if (trustCounts[a] === N - 1) result.push(a)
  });
  return result.length === 1 ? result[0]: -1;
};
