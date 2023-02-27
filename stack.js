class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 * 
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        // If the list is empty we can insert at index value 0 and return the length of 1
        if (this.isEmpty()) {
            this.items[0] = item
            return 1;
        }
        // Instantiate the items currently in stack
        const [...currentStack] = this.items
        // Update the stack with the new item and previous stack
        this.items = [item, ...currentStack]
        // New length of stack
        return this.size();
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        // Determine if the stack is empty and return undefined
        if (this.isEmpty()) {
            return undefined;
        }
        // Instantiate the head of the stack and the rest of it
        const [head, ...restOfStack] = this.items
        // Set items to exclude the head and only include the rest
        this.items = [...restOfStack]
        // Return the head that was removed
        return head;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        // View first item without removal
        return this.items[0]
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { return this.items[0] == null; }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size(count = 0) {
        if (this.items[count] == null) {
            return count;
        }
        count++
        return this.size(count)

        // Version 1
        // return this.items.length;
    }
}

let test = new Stack();

test.push(1)
test.push(2)
test.push(3)
test.push(4)
test.push(5)
test.push('objects')
test.push('test')
test.pop()
console.log(test.size())
console.log(test)

