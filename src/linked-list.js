const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        // this._head = new Node();
        // this._tail = this._head;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data)
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            let currentNode = this._tail;
            currentNode.next = node;
            node.prev = currentNode;
            this._tail = node;
        }
        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null
    }

    tail() {
        return this._tail ? this._tail.data : null
    }

    at(index) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        let prev = currentNode.prev;

        let createdNode = new Node (data, prev, currentNode);

        if (prev) prev.next = createdNode;
        if (currentNode) currentNode.prev = createdNode;

        return this;

        // return createdNode.data;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        console.log('index enter: ', index);
        if (index < 0 || this.length <= index ) {
            return null;
        }

        let current;

        if (index === 0) {
            current = this._head;

            this._head = this._head.next;
            this._head.prev = null;
        } else if (index === this.length - 1) {
            current = this._tail;

            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            current = this._head;

            let prev = null;
            let ind = 0;

            while (ind < index) {
                prev = current;
                current = current.next;
                ind++;
            }

            prev.next = current.next;
            current.next.prev = prev;
        }
        this.length--;
        return this;
    }

    reverse() {}

    indexOf(data) {
        let currentNode = this._head;

        for (let i = 0; i < this.length; i++){
            if (currentNode.data === data){
                return i;
            }
            if (!currentNode.next){
                return -1;
            }
            currentNode = currentNode.next
        }
    }
}

module.exports = LinkedList;
