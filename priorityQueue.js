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
  dequeue() {
    if (this.values.length <= 1) return this.values.pop()
    const highestPriority = this.values[0]
    let swapVal = this.values.pop()
    this.values[0] = swapVal
    let parentIdx = 0
    while (parentIdx < this.values.length - 1) {
      const [tempVal, swapIdx, shouldSwap] = this.getSwapValAndIdx(
        parentIdx,
        swapVal
      )
      if (!shouldSwap) return highestPriority
      this.values[parentIdx] = this.values[swapIdx]
      this.values[swapIdx] = tempVal
      parentIdx = swapIdx
    }
    return highestPriority
  }
  getSwapValAndIdx(parentIdx, swapWith) {
    const firstChildIdx = 2 * parentIdx + 1
    const secondChildIdx = 2 * parentIdx + 2
    const swapValue = Math.min(
      this.values[firstChildIdx]?.priority || Infinity,
      this.values[secondChildIdx]?.priority || Infinity
    )
    const swapIdx =
      swapValue === this.values[firstChildIdx]?.priority
        ? firstChildIdx
        : secondChildIdx
    const shouldSwap =
      swapValue < swapWith.priority || firstChildIdx <= this.values.length - 1
    const tempVal = this.values[parentIdx]
    return [tempVal, swapIdx, shouldSwap]
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('common cold', 5)
priorityQueue.enqueue('gunshot wound', 1)
priorityQueue.enqueue('high fever', 4)
priorityQueue.enqueue('broken arm', 2)
priorityQueue.enqueue('glass in foot', 3)

console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())

// console.log(priorityQueue.values)
