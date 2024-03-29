/*
There are some columns of toy cubes in the box arranged in a line. 
The i-th column contains a_i cubes. At first, the gravity in the box
is pulling the cubes downwards. When Bob switches the gravity, it 
begins to pull all the cubes to a certain side of the box, d, which 
can be either 'L' or 'R' (left or right). Below is an example of 
what a box of cubes might look like before and after switching gravity.
Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/
const flip = (d, a) => {
    //TODO
    return d == 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => a - b).reverse()
}

console.log(flip('R', [3, 2, 1, 2]));       // [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5]));    // [5, 5, 4, 3, 1]