function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    let currentVal = numbers[i]
    let swapIdx = i
    for (let j = i - 1; j >= 0; j--) {
      if (numbers[j] > currentVal) {
        numbers[j + 1] = numbers[j]
        swapIdx = j
      }
    }
    numbers[swapIdx] = currentVal
  }
  return numbers
}

console.log(insertionSort([3, 44, 38, 5, 47, 15]))
