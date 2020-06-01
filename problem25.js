/**
 * Uncrossed Lines
 * We write the integers of A and B (in the order they are given) on two separate horizontal lines.
 * 
 * Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:
 * 
 * A[i] == B[j];
 * The line we draw does not intersect any other connecting (non-horizontal) line.
 * Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.
 * 
 * Return the maximum number of connecting lines we can draw in this way.
 * 
 * Example 1:
 * Input: A = [1,4,2], B = [1,2,4]
 * Output: 2
 * Explanation: We can draw 2 uncrossed lines as in the diagram.
 * We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.
 * 
 * Example 2:
 * Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
 * Output: 3
 * 
 * Example 3:
 * Input: A = [1,3,7,1,7,5], B = [1,9,2,5,1]
 * Output: 2
 * 
 * Note:
 * 1 <= A.length <= 500
 * 1 <= B.length <= 500
 * 1 <= A[i], B[i] <= 2000
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
//input: pair of arrays of integers. Integers are not unique within array, array lengths can differ from each other
//output: number of lines that could be drawn across arrays as rows without crossing each other
//constraints: n/a
//edge cases: no common elements
//brute force: find all lines, remove overlaps 

var maxUncrossedLines = function(A, B) {
  const cache = new Map();
  var recurse = function(X,Y) {
    if (!X.length || !Y.length) return 0;
    if (cache.has(JSON.stringify([X,Y]))) return cache.get(JSON.stringify([X,Y]));
    let x = 0, y = -1
    while (x < X.length && y === -1) {
      y = Y.findIndex(z => z === X[x])
      x++
    }
    if (y > -1) {
          let temp = Math.max(recurse(X.slice(x), Y.slice(y+1))+1,recurse(X.slice(x), Y) )
    cache.set(JSON.stringify([X,Y]), temp)
      return temp;
    }
    return 0;
  }
  return recurse(A,B);
};
