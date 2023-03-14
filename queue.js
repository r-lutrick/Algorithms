class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 *
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        item = new QueueNode(item);
        // Point the tail to the new item
        if (!this.isEmpty()) {
            this.tail.next = item
        }
        this.tail = item
        // if this is the first item, point the head to the new item
        this.head = (this.isEmpty()) ? item : this.head
        // if this is the second item, point head.next to the new item
        this.head.next = (this.size === 1) ? item : this.head.next
        this.size++

    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        // Empty Q
        if (this.isEmpty()) {
            return undefined
        }
        // Removing the only item in the Q
        if (this.size === 1) {
            this.tail = null
        }

        const first = this.head
        this.head = this.head.next
        this.size--
        return first
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.head
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.size
    }

    print() {
        let curr = this.head
        console.log("Q --->")
        while (curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }
    /**
* Determines if the given item is in the queue.
* - Time: O(n) linear.
* - Space: O(1) constant.
* @param {any} searchVal
* @returns {boolean}
*/
    contains(searchVal) {
        let runner = this.head;
        // while ()
    }

    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        for (let i = 0; i < vals.length; i++) {


        }
    }

    /**
* Compares this queue to another given queue to see if they are equal.
* Avoid indexing the queue items directly via bracket notation, use the
* queue methods instead for practice.
* Use no extra array or objects.
* The queues should be returned to their original order when done.
* - Time: O(?).
* - Space: O(?).
* @param {Queue} q2 The queue to be compared against this queue.
* @returns {boolean} Whether all the items of the two queues are equal and
*    in the same order.
*/
    compareQueues(q2) {
        //check if they are not the same length, return a boolean
        if (this.size != q2.size) {
            return false;
        }
        //dequeue n return the order
        while (this || q2) {
            let check1 = this.dequeue();
            let check2 = q2.dequeue();
            // console.log("Check1 info:", check1);
            // console.log("Check2 info:", check2);
            if (check1.data != check2.data) {
                return false;
            }
        }
        return true;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
        // first half / 2
        // second half / 2
        // race car
        let arr = [];
        for (let i = 0; i < this.size; i++) {
            let something = this.dequeue();
            arr.push(something.data)
        }
        console.log(arr)
        // while (this) {
        //     let val = this.dequeue();
        //     console.log(val)
        //     // arr.push(val.data)
        // }
        // console.log(arr)
    }
}

let test = new Queue;
let test2 = new Queue;

test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(2);
test.enqueue(2);
// test2.enqueue(3);
// test2.enqueue(2);
// test2.enqueue(3);
// test2.enqueue(5);
// console.log(test.compareQueues(test2))
console.log(test.isPalindrome(test))