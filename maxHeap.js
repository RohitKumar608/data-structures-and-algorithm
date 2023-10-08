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
  extractMax() {
    if (this.values.length <= 1) return this.values.pop()
    const popVal = this.values.pop()
    const length = this.values.length - 1
    this.values[0] = popVal
    let parentIdx = 0
    while (parentIdx < length) {
      const [maxChildIdx, tempVal] = this.getMaxEleAndIdx(parentIdx)
      if (
        this.values[parentIdx] >= this.values[maxChildIdx] ||
        maxChildIdx > length
      ) {
        break
      }

      this.values[maxChildIdx] = this.values[parentIdx]
      this.values[parentIdx] = tempVal
      parentIdx = maxChildIdx
    }
  }
  getMaxEleAndIdx(parentIdx) {
    const firstChild = 2 * parentIdx + 1
    const secondChild = 2 * parentIdx + 2
    const maxVal = Math.max(
      this.values[firstChild] || 0,
      this.values[secondChild] || 0
    )
    const maxChildIdx =
      this.values[firstChild] === maxVal ? firstChild : secondChild
    const tempVal = this.values[maxChildIdx]
    return [maxChildIdx, tempVal]
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
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()
maxBinaryHeap.extractMax()

console.log(maxBinaryHeap.values)
