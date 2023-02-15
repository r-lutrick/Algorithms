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
    isEmpty() {
        return this.root == null;
    }

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
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    min(current = this.root) {
        // Traverse BST
        while (current.left) {
            current = current.left
        }
        return current.data
    }

    /**
     * Retrieves the largest integer data from this tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        // Traverse BST
        while (current.right) {
            current = current.right
        }
        return current.data
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
            searchVal < pointer.data ? pointer = pointer.left : pointer = pointer.right // Continue...
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        // Base case: if we get the end and/or current is null
        if (!current) {
            return false
        }
        // Found it
        else if (searchVal === current.data) {
            return true
        }
        // Didn't find it and the list is not empty. Traverse..
        else {
            searchVal < current.data ? current = current.left : current = current.right
            return this.containsRecursive(searchVal, current)
        }
    }
}

let test = new BinarySearchTree();

test.insert(5)
test.insert(6)
test.insert(4)
test.insert(3)
test.insert(10)

console.log(test.min())
console.log(test.max())

console.log(test.containsRecursive(5))
console.log(test.containsRecursive(2345))
console.log(test.containsRecursive(10))