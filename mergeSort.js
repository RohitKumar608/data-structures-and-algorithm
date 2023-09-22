function mergeSort(left, right) {
  let leftIdx = 0
  let rightIdx = 0
  let result = []
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] > right[rightIdx]) {
      result[leftIdx + rightIdx] = right[rightIdx]
      rightIdx++
    } else {
      result[leftIdx + rightIdx] = left[leftIdx]
      leftIdx++
    }
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}

function merge(arr) {
  if (arr.length === 1) return arr
  const midVal = Math.floor(arr.length / 2)
  const left = arr.slice(0, midVal)
  const right = arr.slice(midVal)
  return mergeSort(merge(left), merge(right))
}

console.log(merge([99, 44, 6, 2, 1, 5, 63, 87, 0, 1, 283, 4, 0]))
