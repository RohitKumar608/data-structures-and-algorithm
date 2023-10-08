class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }
  insert(value) {
    this.values.push(value)
    return this.bubbleUp()
  }
  bubbleUp() {
    let insertedIdx = this.values.length - 1
    let parentIdx = Math.floor((insertedIdx - 1) / 2)
    let currentVal = this.values[insertedIdx]
    while (parentIdx >= 0 && currentVal > this.values[parentIdx]) {
      const tempVal = this.values[parentIdx]
      this.values[parentIdx] = currentVal
      this.values[insertedIdx] = tempVal
      insertedIdx = parentIdx
      parentIdx = Math.floor((parentIdx - 1) / 2)
    }
    return this.values
  }
}

const maxBinaryHeap = new MaxBinaryHeap()
// maxBinaryHeap.insert(1)
// maxBinaryHeap.insert(2)
// maxBinaryHeap.insert(3)
// maxBinaryHeap.insert(4)
// for (let i = 3; i < 20; i += 2) {
//   maxBinaryHeap.insert(i)
// }
maxBinaryHeap.insert(55)
console.log(maxBinaryHeap)
