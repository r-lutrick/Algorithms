/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abbabba"
const expected5 = true;

const val1 = 121;
const exp1 = true;


function isPalindrome(str) {
  /* VERSION 3 */
  var n = str;
  var n1 = 0;
  while (n > 0) {
    console.log("n is:",n);
    console.log("n1 is:",n1);
    n1 = (n1 * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  if (n1 === str) return true;
  return false;

  /* VERSION 2 */
  // for (let i = 0; i < str.length / 2; i++) {
  //   if (str[i] !== str[str.length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  /* VERSION 1 */
  // var revString = ""
  // for (let i = 0; i <= str.length - 1; i++) {
  //     revString += str[str.length - 1 - i];
  // }
  // if (revString == str) {
  //     return true
  // }
  // else {
  //     return false
  // }
}

// console.log(isPalindrome(str1)) //expected: true
// console.log(isPalindrome(str2)) //expected: true
// console.log(isPalindrome(str3)) //expected: false
// console.log(isPalindrome(str4)) //expected: false
// console.log(isPalindrome(str5)) //expected: true
console.log(isPalindrome(val1)) //expected: true