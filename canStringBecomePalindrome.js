/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a palindrome?
  a word, phrase, or sequence that reads the same backward as forward
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) { }

/*****************************************************************************/

/* 
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.
Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
- "dad" the "d" cancels with itself to leave "a"
- "daad" the "d" and "a" cancel with itself to leave nothing
- "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

/**
 * This same approach can be done with an array, using .indexOf instead
 * of .hasOwnProperty and .splice instead of delete, but it's much
 * slower that way because .indexOf and .splice would be a nested loops.
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */
// function canStringBecomePalindrome(str) {
//     if (str.length < 1) {return false}
//     const strMap = {}
//     str.split('').map((letter) => {
//         if (letter in strMap) {
//             strMap[letter]+=1
//         }
//         else {
//             strMap[letter]=1
//         }
//     })
//     let oddCount = 0
//     for (const key in strMap) {
//         if (strMap[key]%2!==0) {
//             oddCount++
//         }
//         if (oddCount>1){
//             return false
//         }
//     }
//     return true
// }

// console.log(canStringBecomePalindrome(str1));
// console.log(canStringBecomePalindrome(str2));
// console.log(canStringBecomePalindrome(str3));
// console.log(canStringBecomePalindrome(str4));
// console.log(canStringBecomePalindrome(str5));
// console.log(canStringBecomePalindrome(str6));

/**
 * - Time: O(n) linear, n = str.length.
 * - Space: O(n) linear.
 */
function canBecomePalindrome(str = "") {
    const strMap = {}
    if (str.length < 1) return false
    str.split('').map(ltr => ltr in strMap ? strMap[ltr]++ : strMap[ltr] = 1)
    return !(Object.values(strMap).filter(vls => vls % 2 !== 0).length > 1)
}
console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome(str6));