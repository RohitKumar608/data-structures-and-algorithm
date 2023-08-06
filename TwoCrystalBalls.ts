export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length))
  let breakPoint = jump
  for (let idx = 0; idx < breaks.length; idx += jump) {
    if (breaks[idx]) {
      breaks
    }
    breakPoint = idx
  }
  breakPoint -= jump
  for (let index = 0; index <= breakPoint && breaks.length; index++) {
    if (breaks[index]) {
      return index
    }
  }
  return -1
}
