class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        this.right = null;
    }
}

/**
* Represents an ordered tree of nodes where the data of left nodes are <= to
* their parent and the data of nodes to the right are > their parent's data.
*/
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
    * Determines if this tree is empty.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {boolean} Indicates if this tree is empty.
    */
    isEmpty() { return this.root == null; }

    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
    insert(newVal) {
        let newNode = new BSTNode(newVal)
        // Set root
        if (this.isEmpty()) {
            this.root = newNode;
            return this;
        }
        // Traverse BST
        let pointer = this.root
        while (pointer) {
            if (newVal < pointer.data) {
                // Place node in null value
                if (pointer.left == null) {
                    pointer.left = newNode
                    return this
                }
                pointer = pointer.left  // Continue...
            }
            else {
                // Place node in null value
                if (pointer.right == null) {
                    pointer.right = newNode
                    return this
                }
                pointer = pointer.right // Continue...
            }
        }
    }

    /**
     * Inserts an array of new nodes with the given newArr in the right place
     * to preserver the order of this tree.
     * @param {array} newArr The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insertFromArray(newArr) {
        for (let i = 0; i < newArr.length; i++) {
            const newVal = newArr[i];
            this.insert(newVal);
        }
        return this;
    }

    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
    insertRecursive(newVal, current = this.root) {
        // Base case: 
        // check BST is empty
        if (!current) {
            this.root = new BSTNode(newVal);
            return this;
        }
        // Logic:
        // Compare .left or .right are null
        if ((current.left || current.right) === null) {
            let newNode = new BSTNode(newVal);
            newVal < current.data ? current.left = newNode : current.right = newNode // Determine newNode placement
            return this; // Traverse back up the stack
        }
        // Recursion:
        else {
            // Update pointer/current then recurse..
            newVal < current.data ? current = current.left : current = current.right;
            return this.insertRecursive(newVal, current);
        }
    }

    /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    min(current = this.root) {
        if (!this.isEmpty()) { // Empty check
            // Traverse BST
            while (current.left) {
                current = current.left
            }
            return current.data
        }
        return NaN;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (!this.isEmpty()) { // Empty check
            // Traverse BST
            while (current.right) {
                current = current.right
            }
            return current.data
        }
        return NaN;
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(current = this.root) {
        return this.max() - this.min() || null;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        // Set root
        if (this.isEmpty()) {
            return false;
        }
        // Traverse BST
        let pointer = this.root
        while (pointer) {
            if (pointer.data == searchVal) { // Found it
                return true
            }
            // Update pointer & Continue...
            searchVal < pointer.data ? pointer = pointer.left : pointer = pointer.right
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        // Base case: 
        // if we get the end and/or current is null
        if (!current) {
            return false
        }
        // Logic:
        // Found it
        if (searchVal === current.data) {
            return true
        }
        // Recursion:
        else {
            // Update pointer/current then recurse..
            searchVal < current.data ? current = current.left : current = current.right
            return this.containsRecursive(searchVal, current)
        }
    }
}

let test = new BinarySearchTree();

// console.log(test.min())
// console.log(test.max())
// test.insertFromArray([44, 55, 22, 33, 66])

console.log(test.insert(5))
console.log(test.insert(6))
console.log(test.insert(4))
console.log(test.insert(3))
console.log(test.insert(10))
console.log(test.insertRecursive(1000));
console.log(test.insertRecursive(10010));
console.log(test.insertRecursive(3));
// console.log(test.range())
// console.log(test.containsRecursive(5))
// console.log(test.containsRecursive(2345))
// console.log(test.containsRecursive(10))
// console.log(test.contains(1000))

// console.log(test.range())