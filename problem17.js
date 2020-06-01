/**
 * Find All Anagrams in a String
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const map = {}
  let uniqueCount = 0;
  for (let i = 0; i < p.length; i++) {
    if (map[p[i]]) {
      map[p[i]] ++
    } else {
      map[p[i]] = 1;
      uniqueCount ++
    }
  }
  let left = 0, right = 0
  const result = [];
  while (right < s.length) {
    if (map[s[right]] !== null) map[s[right]] --;
    if (map[s[right]] === 0) uniqueCount --
    if(uniqueCount === 0) result.push(left);
    if (right - left === p.length - 1) {
      if (map[s[left]] !== null) map[s[left]] ++
      if (map[s[left++]] === 1)uniqueCount ++
    }
    right ++
  }
  return result;
}
