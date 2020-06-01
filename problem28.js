/**
 * Counting Bits
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 * 
 * Example 1:
 * Input: 2
 * Output: [0,1,1]
 * 
 * Example 2:
 * Input: 5
 * Output: [0,1,1,2,1,2]
 * 
 * Follow up:
 * It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
 * Space complexity should be O(n).
 * Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 * 
 * @param {number} num
 * @return {number[]}
 */
//0,1,10,11,100,101,110,111,1000,1001,1010,1011,1100,1101,1110,1111,10000,10001,10010,10011,10100,
//0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4
var countBits = function(num) {
  let maxI = 1;
  const result = [0]
  for (let i = 1; i <= num; i++) {
    let count1;
    if (i  === maxI * 2) {
      maxI = i
      count1 = 1
    } else {
      count1 = result[i - (maxI)/2] + ((i - (maxI)/2) >= maxI) || 1;
    }
    result.push(count1);
  }
  return result;
};

var countBitsFromString = function(num) {
  let result = [0]
  for (let i = 1; i <= num; i++) {
    result.push(i.toString(2).split('').reduce((a,b) => a + Number(b), 0))
  }
  return result;
};
