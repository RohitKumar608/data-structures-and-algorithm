let calculations = 0
function memoisedFibonacci() {
  const cache = { 0: 1, 1: 1 }
  return function recursive(n) {
    calculations++
    if (n in cache) return cache[n]

    cache[n] = recursive(n - 1) + recursive(n - 2)

    return cache[n]
  }
}

const fibonacci = memoisedFibonacci()

console.log(fibonacci(10), calculations)
// console.log(fibonacci(5))
// console.log(fibonacci(15))
