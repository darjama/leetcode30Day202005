/**
 * @param {number[]} A
 * @return {number}
 * 
 * Maximum Sum Circular Subarray
 * Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.
 * 
 * Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)
 * 
 * Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)
 * 
 * Example 1:
 * Input: [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3
 * 
 * Example 2:
 * Input: [5,-3,5]
 * Output: 10
 * Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
 * 
 * Example 3:
 * Input: [3,-1,2,-1]
 * Output: 4
 * Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
 * 
 * Example 4:
 * Input: [3,-2,2,-3]
 * Output: 3
 * Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
 * 
 * Example 5:
 * Input: [-2,-3,-1]
 * Output: -1
 * Explanation: Subarray [-1] has maximum sum -1
 * 
 * Note:
 * -30000 <= A[i] <= 30000
 * 1 <= A.length <= 30000
 */
// output: max continuous sum of input array taking into account wrap around the ends
// input: array of integers
// exceptions: empty array
// example: [-1,2,-5,4,-7,8,-1]
//constraints: n/a
// approach1: keep separate sums for left, right, and without wrap-around. Will require keeping track of lengths of left and right
// approach2: iterate through array 1.5 times, track length so that it doesn't go over A.length
//aproach3: find lowest continuous middle value and subtract it from total, the compare to nowrapping approach
var maxSubarraySumCircular = function(A) {
  if (A.length === 0) return 0;
  if (A.length === 1) return A[0];
  let innerMinTtl=A[1], noLoopTtl = A[0], Total = A[0];
  let innerMinCurr= A[1], noLoopCurr = A[0];
  for (let i = 1; i < A.length; i++) {
    if (i > 1 && i < A.length -1) {
      innerMinCurr = Math.min(innerMinCurr + A[i], A[i]);
      innerMinTtl = Math.min(innerMinCurr, innerMinTtl);
    }
    noLoopCurr = Math.max(noLoopCurr + A[i], A[i]);
    noLoopTtl = Math.max(noLoopTtl, noLoopCurr);
    Total += A[i]
  }
  let wrap = Total - innerMinTtl;
  let result = Math.max(wrap, noLoopTtl);
  return result;
};
