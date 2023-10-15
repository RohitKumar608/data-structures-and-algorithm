class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }
  addVertex(node) {
    this.adjacentList[node] = []
  }
  addEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].push(vertex2)
    this.adjacentList[vertex2].push(vertex1)
    this.numberOfNodes++
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertex
      for (vertex of nodeConnections) {
        connections += vertex + ' '
      }
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
      (vertex) => vertex !== vertex2
    )
    this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
      (vertex) => vertex !== vertex1
    )
  }
  removeVertex(vertex) {
    while (this.adjacentList[vertex].length) {
      const adjacentVertex = this.adjacentList[vertex].pop()
      this.removeVertex(vertex, adjacentVertex)
    }
    delete this.adjacentList[vertex]
  }
  depthFirstRecursive(start) {
    const result = []
    const visitedVertex = {}
    const traverse = (start) => {
      if (!start) return null
      result.push(start)
      visitedVertex[start] = true
      this.adjacentList[start].forEach((vertex) => {
        if (!visitedVertex[vertex]) {
          traverse(vertex)
        }
      })
    }
    traverse(start)
    return result
  }
  depthFirstIterative(start) {
    const stack = [start]
    let result = []
    let visitedVertex = { [start]: true }
    while (stack.length) {
      const vertex = stack.pop()
      result.push(vertex)
      this.adjacentList[vertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
  breadthFirstSearch(start) {
    const queue = [start]
    let result = []
    let visitedVertex = { [start]: true }
    while (queue.length) {
      const vertex = queue.shift()
      result.push(vertex)
      this.adjacentList[vertex].forEach((neighbor) => {
        if (!visitedVertex[neighbor]) {
          visitedVertex[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

let g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
// console.log(g.depthFirstRecursive('A'))
// console.log(g.depthFirstIterative('A'))
console.log(g.breadthFirstIterative('A'))

//Answer:

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
