/**
 * Remove K Digits
 * Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
 * 
 * Note:
 * The length of num is less than 10002 and will be ≥ k.
 * The given num does not contain any leading zero.
 * 
 * Example 1:
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
 * 
 * Example 2:
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 * 
 * Example 3:
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    //o:string of digits with lowest possible value
    //i: string of digits and quantity of digits to be removed
    //e: leading zeroes must be removed. If all characters removed, return '0'
    //iterate through string
    if (k === num.length) {
        return '0';
    }
    var i = 0;
    var numArray = num.split('');
    while (k > 0 && i < num.length - 1) {
        if (numArray[i] > numArray[i+1]) {
            numArray.splice(i,1);
            k--
            if (i > 0) i--
        } else {
          i++
        }
    }
    while (k > 0) {
        numArray.pop();
        k--;
    }
    while (numArray.length > 1 && numArray[0] === '0') {
        numArray.shift();
    }
    return numArray.join('');
};
