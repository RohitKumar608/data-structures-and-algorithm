class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  insert(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }
}

const linkedList = new DoublyLinkedList()

linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(3)
console.log(linkedList)
