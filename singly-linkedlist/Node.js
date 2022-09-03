class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node
        } else {
            throw new Error('Next node must be a member of the Node class.')
        }
    }
}

module.exports = Node;