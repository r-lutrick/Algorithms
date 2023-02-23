/*
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/
/**
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// l1 = [9, 4, 3], l2 = [9, 6, 4]
// l1 = [0], l2 = [0]
l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]

var addTwoNumbers = function (l1, l2) {
    const output = []
    let i = 0, j = 0, carryOver = 0
    // excess    condition(l1 > l2)  :false(do the opposite)
    let excess = l1.length > l2.length ?
        // true(slice l1 at index of l2's length) 
        l1.slice(l2.length) :
        // :false(do the opposite)
        l2.slice(l1.length)

    // Loop over both array at the same time
    while (i < l1.length && j < l2.length) {
        i++, j++
        // total will never exceed 18 because 9 + 9 = 18
        let total = l1[i - 1] + l2[j - 1] + carryOver
        if (total < 10) {
            output.push(total)
            carryOver = 0
            continue
        }
        output.push(total % 10)
        carryOver = 1
    }

    for (let e = 0; e < excess.length; e++) {
        let total = excess[e] + carryOver
        if (total < 10) {
            output.push(total)
            carryOver = 0
        } else {
            output.push(total % 10)
            carryOver = 1
        }
    }

    if (carryOver === 1) {
        output.push(carryOver)
    }

    return output
};

console.log(addTwoNumbers(l1, l2))