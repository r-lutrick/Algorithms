/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/

const str1 = "b70a164c32a20c10j3a15";

const expected1 = "a199b70c42j3";

/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
// function rehash(s) {}

/*****************************************************************************/

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
// const rehash = (str) => {
//     let output = ""
//     const strMap = {}
//     let strArr = str.match(/[a-z][0-9]+/g).sort()
//     // console.log(strArr)
//     for (let i = 0; i < strArr.length; i++) {
//         letter = strArr[i].charAt(0)
//         number = Number(strArr[i].substr(1, strArr[i].length - 1))
//         if (letter in strMap) {
//             strMap[letter] += number
//         } else {
//             strMap[letter] = number
//         }
//     }
//     for (const key in strMap) {
//         output += key + strMap[key]
//     }
//     return output
// }
const rehash = (str) => {
    let output = ""
    const strMap = {}
    str.match(/[a-z][0-9]+/g).sort().map(pattern => {
        letter = pattern.charAt(0)
        number = Number(pattern.substr(1, pattern.length - 1))
        letter in strMap ? 
            strMap[letter] += number :
            strMap[letter] = number
    })
    for (const key in strMap) {
        output += key + strMap[key]
    }
    return output
}

console.log(rehash(str1)); //expected1 = "a199b70c42j3";