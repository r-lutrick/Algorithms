toBeSorted = [13, 17, 10, 2, 7, 4, 8, 21, 6, -1]
// const quickSort = (arr) => {
//     // Base case
//     if (arr.length <= 1) {
//         return arr
//     }

//     // Logic
//     i = 0
//     let pivot = arr[arr.length - 1] // this number can be start (arr[0]) or end
//     const left = [], right = []
//     while (i < arr.length - 1) {
//         // Version 2
//         pivot >= arr[i] ? left.push(arr[i]) : right.push(arr[i])

//         // Version 1
//         // if (pivot >= arr[i]) {
//         //     left.push(arr[i])
//         // }
//         // if (pivot <= arr[i]) {
//         //     right.push(arr[i])
//         // }

//         i++;
//     }

//     // Recusion
//     return quickSort(left).concat(pivot, quickSort(right))
// }

const quickSort = (arr) => {
    // Base Case
    if (arr.length <= 1) { return arr }
    // Variables
    let i = 0, pivot = arr[arr.length - 1]
    const left = [], right = []
    // Logic
    while (i < arr.length - 1) { pivot >= arr[i] ? left.push(arr[i]) : right.push(arr[i]); i++; }
    // Recursion
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(toBeSorted))