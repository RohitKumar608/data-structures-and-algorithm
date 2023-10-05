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
    this.length = 0
  }
  insert(val) {
    this.length++
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
  pop() {
    if (this.length === 0) {
      this.tail = null
      this.head = null
      return undefined
    }
    this.length--
    const deletedNode = this.tail
    this.tail = deletedNode.prev
    if (this.tail) this.tail.next = null
    deletedNode.prev = null
    return deletedNode
  }
}

const linkedList = new DoublyLinkedList()

linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(3)
console.log(structuredClone(linkedList))
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())
