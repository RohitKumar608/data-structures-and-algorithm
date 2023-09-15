class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  insert(value) {
    const node = new Node(value)
    this.length++
    if (this.head == null) {
      this.head = node
      this.tail = node
    }
    this.tail.next = node
    this.tail = node
  }
  prepend(value) {
    const node = new Node(value)
    node.next = this.head
    this.head = node
    this.length++
  }
  insertAt(index, value) {
    const node = new Node(value)
    if (index === 0) {
      prepend(value)
    }
    if (index > this.length) {
      this.tail.next = node
      this.tail = node
    }
    let teamHead = this.head
    while (index > 1) {
      index--
      teamHead = teamHead.next
    }
    const nextTemp = teamHead.next
    teamHead.next = node
    node.next = nextTemp
  }
}

const linkedList = new LinkedList()

linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(3)
linkedList.prepend(0)
linkedList.insertAt(2, 7)
console.log(linkedList)
