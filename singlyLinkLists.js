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
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
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
    }

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

    removeHead () {
        /* 
        Determine if the head is empty
        otherwise update head with next value
         */
        if (!this.isEmpty()) {
            this.head = this.head.next;
        }
    }

    getNodes() {
        const output = []
        i = 1
        let current = this.head
        while (current.next !== null) {
            output.push({ node: { data: current.data } })
            current = current.next
            i++
        }
        output.push({ node: { data: current.data } })
        return output
    }
}

let val = new SinglyLinkedList();
val.insertAtFront(100);
val.insertAtFront(50);
val.insertAtBack(25);
val.insertAtBack(5);
val.insertAtBack(1);
val.removeHead();
console.log(val.getNodes())