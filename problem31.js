 /**
 * Edit Distance
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * Example 1:
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * Example 2:
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//approach 1: iterate thru word1 and word2 and keep the minimum count
var minDistance = function(word1, word2, memo = {}) {
  if (word1 === '' || word2 === '') return Math.abs(word1.length - word2.length);
  if (memo[word1 + ' ' + word2]) return memo[word1 + ' ' + word2];
  let del = Infinity, insert = Infinity, replace, changeFirst;
  let distance = word1.indexOf(word2[0]);
  if (distance > 0) {
    del = distance + minDistance(word1.substring(distance), word2, memo);
    memo[word1.substring(distance) + ' ' + word2] = del - distance;
  }
  if (word1.length < word2.length || word1[0] === word2[1]) {
    insert = 1 + minDistance(word1, word2.substring(1), memo);
    memo[word1 + ' ' + word2.substring(1)] = insert - 1;
  }
  changeFirst = word1[0] === word2[0]? 0 : 1;
  replace = changeFirst + minDistance(word1.substring(1), word2.substring(1), memo);
  memo[word1.substring(1) + ' ' + word2.substring(1)] = replace - changeFirst;
  return Math.min(del, replace, insert);
};
