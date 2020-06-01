/**
 * Interval List Intersections
 * Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
 * Return the intersection of these two interval lists.
 * (Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)
 * 
 * Example 1:
 * Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
 * Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 *  
 * Note:
 * 0 <= A.length < 1000
 * 0 <= B.length < 1000
 * 0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
 * 
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  let [a, b] = [0, 0];
  const result = [];
  while (a < A.length && b < B.length) {
    if (A[a][0] > B[b][1]) {
      b++;
      continue;
    }
    if (B[b][0] > A[a][1]) {
      a++;
      continue;
    }
    result.push([Math.max(A[a][0],B[b][0]), Math.min(A[a][1],B[b][1])])
    let lastA = a;
    if (!B[b+1] || A[a][1] < B[b+1][0]) a++;
    if (!A[lastA+1] || B[b][1] < A[lastA+1][0]) b++;
  }
  return result;
};
