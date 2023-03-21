/* 
A Narcissistic Number (or Armstrong Number) is a positive number 
which is the sum of its own digits, each raised to the power of 
the number of digits in a given base. 
Restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:
Your code must return true or false (not 'true' and 'false') depending 
upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, 
only valid positive non-zero integers will be passed into the function.
*/

/**
* @param {number} value
* @returns {Boolean} - A denomination table where the keys are 
**/

let test1 = 153
let test2 = 1652
let test3 = 7

function narcissistic(value) {
    var n = value;
    var n1 = 0;
    while (n > 0) {
        n1 += (n % 10) ** value.toString().split('').length;
        n = Math.floor(n / 10);
    }
    console.log("n is:", value)
    console.log("n1 is:", n1)
    return value == n1

    // console.log(value.toString().split(''))
    // let splitValue = value.toString().split('')
    // let cache = []
    // let sum = 0
    // for (const i of splitValue) {
    //     cache.push(i ** splitValue.length)
    // }
    // for (const j of cache) {
    //     sum+=Number(j)
    // }
    // return sum.toString().split('').length <= 3
}

console.log(narcissistic(test1))
console.log(narcissistic(test2))
console.log(narcissistic(test3))
