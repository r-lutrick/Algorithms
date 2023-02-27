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
    if (this.isEmpty()) {
        this.items[0] = item
        return 1;
    } 
    const [...currentStack] = this.items
    this.items = [item, ...currentStack]
    return this.size();
}

/**
 * Removes the top / last item from this stack.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {any} The removed item or undefined if this stack was empty.
 */
pop() {
    if (this.isEmpty()){
        return undefined;
    }
    const [head, ...currentStack] = this.items
    this.items = [...currentStack]
    return head;
}

/**
 * Retrieves the top / last item from this stack without removing it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {any} The top / last item of this stack.
 */
peek() {
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
size() {
    return this.items.length;
}
}

let test = new Stack();

console.log(test.push(1))
console.log(test.push(2))
console.log(test.push(3))
console.log(test.push(4))
console.log(test.pop())
console.log(test.pop())
console.log(test.pop())
console.log(test.push(5))

console.log(test)
