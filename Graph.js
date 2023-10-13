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
console.log(g.depthFirstRecursive('A'))

//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
