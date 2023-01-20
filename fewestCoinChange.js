/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */


function fewestCoinChange(cents) {
    coinDict = {
        'quarter': cents >= 25 ? Math.floor(cents / 25) : 0,
        'dime': cents >= 10 ? Math.floor(cents % 25 / 10) : 0,
        'nickle': cents >= 5 ? Math.floor(cents % 25 % 10 / 5) : 0,
        'penny': cents >= 1 && cents % 25 % 10 % 5 / 1
    }

    return coinDict
}



// function fewestCoinChange(cents) {
//     coinDict = {}
//     while (cents > 0) {
//         if (cents >= 25) {
//             if (!('quarter' in coinDict)) {
//                 coinDict['quarter'] = 1
//             }
//             coinDict['quarter'] += 1
//             cents -= 25
//         }
//         else if (cents >= 10) {
//             if (!('dime' in coinDict)) {
//                 coinDict['dime'] = 1
//             }
//             coinDict['dime'] += 1
//             cents -= 10
//         }
//         else if (cents >= 5) {
//             if (!('nickle' in coinDict)) {
//                 coinDict['nickle'] = 1
//             }
//             coinDict['nickle'] += 1
//             cents -= 5
//         }
//         else {
//             if (!('penny' in coinDict)) {
//                 coinDict['penny'] = 1
//             }
//             coinDict['penny'] += 1
//             cents -= 1
//         }
//     }
//     return coinDict
// }

console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }