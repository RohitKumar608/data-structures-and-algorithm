class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    const node = new Node(val, priority)
    this.values.push(node)
    let insertIdx = this.values.length - 1
    const currPriority = priority
    let parentNodeIdx = Math.floor((insertIdx - 1) / 2)
    while (
      parentNodeIdx >= 0 &&
      this.values[parentNodeIdx].priority > currPriority
    ) {
      const tempVal = this.values[parentNodeIdx]
      this.values[parentNodeIdx] = this.values[insertIdx]
      this.values[insertIdx] = tempVal
      insertIdx = parentNodeIdx
      parentNodeIdx = Math.floor((parentNodeIdx - 1) / 2)
    }
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('common cold', 5)
priorityQueue.enqueue('gunshot wound', 1)
priorityQueue.enqueue('high fever', 4)
priorityQueue.enqueue('broken arm', 2)
priorityQueue.enqueue('glass in foot', 3)
console.log(priorityQueue.values)
