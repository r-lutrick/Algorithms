/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    newArr = []
    for (let i = 0; i < left.length; i++) {
        newArr.push(left[i]);
    }
    for (let i = 0; i < right.length; i++) {
        newArr.push(right[i]);
    }
    return newArr.sort()
}
// console.log(merge(sortedA1, sortedB1))
// console.log(merge(sortedA2, sortedB2))
// console.log(merge(sortedA3, sortedB3))
/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    // basecase
    if (nums.length == 1) {
        return nums
    }
    let mid = Math.floor(nums.length / 2)
    let left = nums.splice(0, mid)
    let right = nums
    return merge(mergeSort(left), mergeSort(right))
}
// let asdf = [2, 7, 4, 8, 9, 3, 5, 2]
// console.log(mergeSort(asdf))

