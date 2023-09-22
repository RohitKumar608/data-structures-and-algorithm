class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  root = null

  insert(val) {
    const node = new Node(val)
    if (this.root === null) {
      this.root = node
      return
    }

    let tempRoot = this.root
    while (true) {
      if (tempRoot.value > val) {
        if (tempRoot.left === null) {
          tempRoot.left = node
          return this
        }
        tempRoot = tempRoot.left
      } else {
        if (tempRoot.right === null) {
          tempRoot.right = node
          return this
        }
        tempRoot = tempRoot.right
      }
    }
  }

  lookUp(value) {
    if (this.root === null) return false
    let tempRoot = this.root
    while (tempRoot) {
      if (tempRoot.value === value) return tempRoot
      if (tempRoot.value > value) {
        tempRoot = tempRoot.left
      } else {
        tempRoot = tempRoot.right
      }
    }
    return false
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookUp(9))
console.log(tree.lookUp(17))

console.log(tree.root)