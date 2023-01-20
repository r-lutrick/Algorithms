// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between the sums of its diagonals
    The absolute difference between two variables, is simply one subtracted from the other and you get the sum.
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    /* 
    Version 1
        Tim's first approach and brute force
    */
    // let forwardDiag = 0
    // let backwardDiag = 0
    // for (let i = 0; i < sqrMatrix.length; i++) {
    //     forwardDiag += sqrMatrix[i][i]
    //     backwardDiag += sqrMatrix[i][sqrMatrix.length - 1 - i]
    // }
    // return Math.abs(forwardDiag - backwardDiag)


    /* 
    Version 2
        Tim noticed we were able to subtract values at each new array
        we used just one sum to track those differences
    */
    // let sum = 0
    // for (let i = 0; i < array.length; i++) {
    //     sum += num[i] - num[num.length - 1 - i]
    // }
    // return Math.abs(sum)

    /* 
    Version 3
        I was able to use Tim's single array difference to utilize JavaScript's map() funciton
        this allowed us to add to sum during each iteration.
    */
    // var sum = 0; 
    // sqrMatrix.map((num, i) => { sum += num[i] - num[num.length - 1 - i] }); 
    // return Math.abs(sum)

    /* 
    Version 4
        Following all previous steps, assuming the matrix has at least 1 value, Tim was able to return an
        absolute value from the first item in the first array before updating that first value to be used as a difference
        for the final position.
    */
    //              assume 1x1 mtrx - (add the difference of each array to sqrMatrix[0][0] while creating an array) [get last item in array]
    return Math.abs(sqrMatrix[0][0] - sqrMatrix.map((arr, i) => sqrMatrix[0][0] += arr[i] - arr[arr.length - 1 - i])[sqrMatrix.length - 1]);
}

/* 
    Version 5
        Version 4 as an arrow function creating a true one liner for finding a diagonal difference of a matrix
*/
const diagonalDifference = sqrMatrix => Math.abs(sqrMatrix[0][0] - sqrMatrix.map((arr, i) => sqrMatrix[0][0] += arr[i] - arr[arr.length - 1 - i])[sqrMatrix.length - 1]);

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

/*****************************************************************************/

module.exports = { diagonalDifference };