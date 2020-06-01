/**
 * Permutation in String
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
 * 
 * Example 1:
 * Input: s1 = "ab" s2 = "eidbaooo"
 * Output: True
 * Explanation: s2 contains one permutation of s1 ("ba").
 * 
 * Example 2:
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 * 
 * Constraints:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const charMap = {};
  let uniqueCount = 0;
  let left = 0;
  for(let i = 0; i < s1.length; i ++) {
    if (s1[i] in charMap) {
      charMap[s1[i]] ++;
    } else {
      uniqueCount ++;
      charMap[s1[i]] = 1;
    }
  }
  for(let i = 0; i < s2.length; i++) {
    if (charMap[s2[i]] !== undefined ) {
      charMap[s2[i]] --;
      if (charMap[s2[i]] === 0) uniqueCount --;
    }
    //console.log(s2.substring(left,i +1), uniqueCount)
    if (uniqueCount === 0) return true;
    if (i - left === s1.length -1) {
      if (charMap[s2[left]] !== undefined) charMap[s2[left]] ++;
      if (charMap[s2[left]] === 1) uniqueCount ++;
      left ++;
    }
    
  }
  return false;
};
