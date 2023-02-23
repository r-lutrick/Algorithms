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
        // check BST is empty
        if (this.isEmpty()) {
            this.root = new BSTNode(newVal);
        }
        else if (newVal < current.data) { // Input is less than
            // current.left has a value so we need to recurse, otherwise input new node since its empty
            current.left ? this.insertRecursive(newVal, current.left) : current.left = new BSTNode(newVal);
        } else { // Input is greater than
            // current.right has a value so we need to recurse, otherwise input new node since its empty
            current.right ? this.insertRecursive(newVal, current.right) : current.right = new BSTNode(newVal);
        }
        return this;
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
        if (searchVal === current.data) { // Found it
            return true
        }
        // Recursion:
        else {
            // Update pointer/current then recurse..
            searchVal < current.data ? current = current.left : current = current.right
            return this.containsRecursive(searchVal, current)
        }
    }

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals
    }
    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals
    }
    toArrReverseorder(node = this.root, vals = []) {
        if (node) {
            this.toArrReverseorder(node.right, vals);
            vals.push(node.data);
            this.toArrReverseorder(node.left, vals);
        }
        return vals
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, tabCount = 0, tabIncrement = 1) {
        if (this.isEmpty()) { return; }
        tabCount += tabIncrement;
        node.right && this.print(node.right, tabCount);
        console.log("\t".repeat(tabCount < tabIncrement ? 0 : tabCount - tabIncrement) + node.data);
        node.left && this.print(node.left, tabCount);
    }

    /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
    size(node = this.root, count = 0) {
        if (node) {
            count++
            count += this.size(node.left)
            count += this.size(node.right)
        }
        return count
    }

    /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
    height(node = this.root) {
        if (!node)
            return 0;
        else {
            /* compute the depth of each subtree */
            let lDepth = this.height(node.left);
            let rDepth = this.height(node.right);
            /* use the larger one */
            return lDepth > rDepth ? lDepth + 1 : rDepth + 1
        }
        /* 
            if (!node) {
                return 0;
            }
            let maxDepth = 0;
            let stack = [{ node: node, depth: 1 }];
        
            while (stack.length > 0) {
                const { node, depth } = stack.pop();
                maxDepth = Math.max(maxDepth, depth);
                if (node.left) {
                    stack.push({ node: node.left, depth: depth + 1 });
                }
                if (node.right) {
                    stack.push({ node: node.right, depth: depth + 1 });
                }
            }
            return maxDepth;
         */
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the last nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
    */
    isFull(node = this.root) {
        if (!node) {
            return false;
        }
        if (node.left != null && node.right == null || node.right != null && node.left == null) {
            return false;
        }
        if (node.left && node.right) {
            let lDepth = this.isFull(node.left)
            let rDepth = this.isFull(node.right)
            if (lDepth == false || rDepth == false) {
                return false
            }
            return true
        }
    }

    /**
 * Finds all the values that are repeated in the binary search tree
 * - Time: O(?).
 * - Space: O(?).
 * @returns {Array<Number>} The values that are repeated in the binary search tree.
 */
    findDuplicates() {
        // let output = []
        // let outObj = {}
        // let bstArr = this.toArrInorder()
        // for (let i = 0; i < bstArr.length; i++) {
        //     outObj.hasOwnProperty(bstArr[i]) ? outObj[bstArr[i]]++ : outObj[bstArr[i]] = 1;
        // }

        // for (const key in outObj) {
        //     if (outObj[key] > 1) {
        //         for (let i = 0; i < outObj[key]; i++) {
        //             output.push(key)
        //         }
        //     }
        // }
        // return output

        let output = []
        let bstArr = this.toArrInorder()
        for (let i = 0; i < bstArr.length - 1; i++) {
            if (bstArr[i] == bstArr[i + 1]) {
                output.push(bstArr[i])
                output.push(bstArr[i + 1])
                i++
            }
        }

        return output
    }
}

let test = new BinarySearchTree();

// console.log(test.min())
// console.log(test.max())

test.insert(8)
// test.insert(1)
test.insert(11)
test.insert(9)
test.insert(12)
test.insertRecursive(5)
test.insertRecursive(5)
test.insertRecursive(5)
test.insertRecursive(4)
test.insertRecursive(4)
test.insertRecursive(4)
test.insertRecursive(6)
// test.insertRecursive(3)
// test.insertRecursive(2)
// test.insertFromArray([44, 55, 22, 33, 66, 77, 88, 99])
test.print()
console.log("=======================")
console.log(test.findDuplicates())
// console.log(test.isFull())
// console.log(test.size())
// console.log(test.height())
// console.log("=====Pre-Order=====")
// console.log(test.toArrPreorder())
// console.log("=====In-Order=====")
// console.log(test.toArrInorder())
// console.log("=====Post-Order=====")
// console.log(test.toArrReverseorder())
// console.log(test.range())
// console.log(test.containsRecursive(5))
// console.log(test.containsRecursive(2345))
// console.log(test.containsRecursive(10))
// console.log(test.contains(1000))
// console.log(test.range())

