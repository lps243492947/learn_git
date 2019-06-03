import LinkedListNode from './LinkedListNode.js';
class LinkedList {
  constructor() {
    // 1->4->3->2->5->2
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) { // 空链表
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  toArray () {
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push()
      currentNode = currentNode.next;
    }
    return nodes;
  }
  toString () {
    return this.toArray().map(node=>node.val);
  }
}

export default LinkedList;