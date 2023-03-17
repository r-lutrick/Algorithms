/*
Your goal in this kata is to implement a difference function, which subtracts one list 
from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    return a.filter(i => !b.includes(i))
    // if (a.length < 1) return a
    // for (const item of b) {
    //     var index = a.indexOf(item);
    //     if (index !== -1) {
    //         a.splice(index, 1);
    //     }
    // }
    // return a;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2, 2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]

/* 
EXPLANATION
There is a better way using ES7:

--------INTERSECTION--------
https://i.stack.imgur.com/uasoX.png

let intersection = arr1.filter(x => arr2.includes(x));

For [1,2,3] [2,3] it will yield [2,3]. 
On the other hand, for [1,2,3] [2,3,5] will return the same thing.

--------DIFFERENCE--------
https://i.stack.imgur.com/mEtro.png

let difference = arr1.filter(x => !arr2.includes(x));

For [1,2,3] [2,3] it will yield [1]. 
On the other hand, for [1,2,3] [2,3,5] will return the same thing.

--------SYMMETRIC DIFFERENCE--------
https://i.stack.imgur.com/zb1hW.png

let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));

This way, you will get an array containing all the elements of arr1 
that are not in arr2 and vice-versa


You can add this to Array.prototype so it can be used like this:
Array.prototype.diff = function(arr2) { return this.filter(x => !arr2.includes(x)); }
[1, 2, 3].diff([2, 3])
*/