/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {ListNode|null}
         */
        this.next = null;
    }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {

    /**
     * Constructs a new instance of an empty linked list that inherits all the methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *  returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of this list.
     * @param {any} data
     * @returns {SinglyLinkedList}
     */
    insertAtBack(data, current = this.head) {
        // Version 2 (Recursion)
        if (!this.isEmpty()) {
            if (current.next === null) {
                current.next = new ListNode(data)
                return
            } else {
                current = current.next
                this.insertAtBack(data, current)
            }
        } else {
            this.head = new ListNode(data)
        }
        /*
        // Version 1
        // check if head is linked or not, this is needed for syntax
        if (this.isEmpty()) {
            this.head = new ListNode(data);
        } else {
            // Otherwise we will select the head node and loop
            let current = this.head
            while (current.next !== null) { // current.next NOT current
                // Update current pointer
                current = current.next
            }
            // we've reached the end of the list
            // create new node
            current.next = new ListNode(data)
        }
        */
    }

    /**
    * Creates a new node with the given data and inserts that node at the front of this list.
    * @param {any} data
    * @returns {SinglyLinkedList}
    */
    insertAtFront(data) {
        /* 
        Set head node to a variable
        replace head node with new head-node-data
        add head-node-variable to updated head-node-data
        */
        let headNodeVariable = this.head;
        this.head = new ListNode(data);
        this.head.next = headNodeVariable;
    }

    /**
     * Removes the first node of this list.
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        /* 
        Determine if the head is empty
        otherwise update head with next value
         */
        if (!this.isEmpty()) {
            let removed = this.head
            this.head = this.head.next;
            return removed
        }
    }

    /**
    * Removes the last node of this list.
    * @returns {any} The data from the node that was removed.
    */
    removeBack() {
        if (!this.isEmpty()) {
            // Check head's node exist
            if (this.head.next !== null) {
                let current = this.head;
                // .next.next will check the second to last next value
                while (current.next.next !== null) {
                    current = current.next;
                }
                let removed = current.next.data;
                current.next = null; // remove from back
                return removed;
            } else {
                let removed = this.head.data;
                this.head = null; // remove from back
                return removed;
            }
        } else {
            return null
        }
    }

    getNodes() {
        let current = this.head
        while (current.next !== null) {
            console.log(current.data)
            current = current.next
        }
        console.log(current.data)
        // const output = []
        // let current = this.head
        // while (current.next !== null) {
        //     output.push({ node: { data: current.data } })
        //     current = current.next
        // }
        // output.push({ node: { data: current.data } })
        // return output
    }


    /**
     * 
     * @param {Array<any>} vals 
     * @returns {SinglyLinkedList}
     * insert each value in an array into SLL
     */
    seedFromArr(vals) {
        // loop over val <array>
        for (let i = 0; i < vals.length; i++) {
            let toBeAdded = vals[i]
            // use method to add to back (or front??)
            this.insertAtBack(toBeAdded);
            // this.insertAtFront(toBeAdded)
        }
    }


    /**
   * Converts this list into an array containing the data of each node.
   * @returns {Array<any>} An array of each node's data.
   */
    toArr() {
        const output = []
        // This is our runner for going down the SLL
        let current = this.head
        while (current.next !== null) {
            // push value into our array
            output.push(current.data)
            // Update runner
            current = current.next;
        }
        // Add final value to output
        output.push(current.data)
        return output
    }

    /**
* Retrieves the data of the second to last node in this list.
* - Time: O(?).
* - Space: O(?).
* @returns {any} The data of the second to last node or null if there is no
*    second to last node.
*/
    secondToLast() {
        if (this.isEmpty()){
            return null;
        } else if (this.head.next == null) {
            return this.head
        } else {
            pointer = this.head;
            while (pointer.next.next !== null){
                pointer = pointer.next;
            }
            return pointer.next;
        }
    }


    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        //find if the value exists in the SLL


        //remove and return true


        //if not not found, return false
    }

}

let val = new SinglyLinkedList();
val.insertAtBack(100);
val.insertAtBack(50);
val.insertAtBack(25);
val.insertAtBack(5);
val.insertAtBack(1);
val.removeBack();
// console.log(val.toArr())

val.seedFromArr([1, 2, 3, 4, 5, 6, 7, 7, 109283]);
console.log(val.secondToLast());