/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

const str2 = "???"
const expected2 = ['000', '001', '010', '011', '100', '101', '110', '111']

/**
 * Add params with defaults if needed for recursion <------- you will need to
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * Useful built in: .indexOf, returns index of first instance of a value, -1 if not found
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
*/
function binaryStringExpansion(str) {
    //Your code here
    // base case? 
    
    // logic? 

    // recursive call?

    // return?

}

/*****************************************************************************/


console.log(binaryStringExpansion(str1)) // expected ["1000", "1001", "1100", "1101"]
console.log(binaryStringExpansion(str2)) // expected ['000', '001', '010', '011', '100', '101','110', '111']