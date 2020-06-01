/**
 * K Closest Points to Origin
 * 
 * We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
 * (Here, the distance between two points on a plane is the Euclidean distance.)
 * You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)
 * 
 * Example 1:
 * Input: points = [[1,3],[-2,2]], K = 1
 * Output: [[-2,2]]
 * Explanation: 
 * The distance between (1, 3) and the origin is sqrt(10).
 * The distance between (-2, 2) and the origin is sqrt(8).
 * Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
 * We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
 * 
 * Example 2:
 * Input: points = [[3,3],[5,-1],[-2,4]], K = 2
 * Output: [[3,3],[-2,4]]
 * (The answer [[-2,4],[3,3]] would also be accepted.)
 *  
 * Note:
 * 1 <= K <= points.length <= 10000
 * -10000 < points[i][0] < 10000
 * -10000 < points[i][1] < 10000
 * 
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const sort = function(i, j, K) {
      if (i >= j) return
      var k = Math.round((Math.random()*(j-i+1)) + i)
      [points[i], points[k]] = [points[k], points[i]]
      let mid = partition(i, j)
      if (K < mid - i + 1) {
          sort(i, mid - 1, K)
      } else if (K > mid - i + 1) {
         sort(mid + 1, j, K - (mid - i + 1))
      }
  }
  const partition = function(i, j) {
      let oi = i
      let pivot = dist(points[i])
      i += 1

      while (true) {
          while (i < j && dist(points[i]) < pivot) {
               i += 1
          }

          while (i <= j && dist(points[j]) >= pivot) {
                j -= 1
          }

          if (i >= j) break;
          [points[i], points[j]] = [points[j], points[i]]
      }
      [points[oi], points[j]] = [points[j], points[oi]]
      return j              
      }
  sort(0, points.length - 1, K)
  return points.slice(0,K)               
}
const dist = ([x, y]) => x * x + y * y;
