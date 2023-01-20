/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    if (sortedA.length === 0 || sortedB.length === 0) {
        return sortedA.concat(sortedB)
    }
    // Version 1
    // hashMapA = {}
    // hashMapB = {}
    // output = []
    // for (let i = 0, j = 0; i < sortedA.length && j < sortedB.length;) {
    //     if (sortedA[i] in hashMapA) {
    //         hashMapA[sortedA[i]].push(sortedA[i])
    //         i++
    //     } else {
    //         hashMapA[sortedA[i]] = [sortedA[i]]
    //         i++
    //     }
    //     if (sortedB[j] in hashMapB) {
    //         hashMapB[sortedB[j]].push(sortedB[j])
    //         j++
    //     } else {
    //         hashMapB[sortedB[j]] = [sortedB[j]]
    //         j++
    //     }
    // }
    // for (const key in hashMapA) {
    //     if (key in hashMapB) {
    //         if (hashMapA[key].length > hashMapB[key].length) {
    //             output.push(...hashMapA[key])
    //         } else {
    //             output.push(...hashMapB[key])
    //         }
    //     } else {
    //         output.push(...hashMapA[key])
    //     }
    // }
    // for (const key in hashMapB) {
    //     if (output.indexOf(hashMapB[key][0]) === -1) {
    //         output.push(...hashMapB[key])
    //     }
    // }
    // return output.sort((a, b) => a - b)

    // Version 2
    const output = []
    let a = 0, b = 0
    while (a < sortedA.length && b < sortedB.length) {
        if (sortedA[a] < sortedB[b]) {
            output.push(sortedA[a])
            a++
        }
        else if (sortedA[a] > sortedB[b]) {
            output.push(sortedB[b])
            b++
        }
        else if (sortedA[a] == sortedB[b]) {
            output.push(sortedA[a])
            a++
            b++
        }
    }
    output.push(...sortedA.slice(a))
    output.push(...sortedB.slice(b))
    return output
}

console.log(orderedMultisetUnion(nums1A, nums1B)); // [1, 2, 2, 2, 6, 6, 7];
console.log(orderedMultisetUnion(nums2A, nums2B)); // [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];
console.log(orderedMultisetUnion(nums3A, nums3B)); // [2, 2, 3, 3, 3];
console.log(orderedMultisetUnion(nums4A, nums4B)); // [2, 2, 3, 3, 3];
console.log(orderedMultisetUnion(nums5A, nums5B)); // []

/*****************************************************************************/


// module.exports = { orderedMultisetUnion, orderedMultisetUnion2 };