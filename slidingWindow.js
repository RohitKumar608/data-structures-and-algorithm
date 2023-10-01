function slidingWindow(arr, num) {
  let maxSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  let tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
