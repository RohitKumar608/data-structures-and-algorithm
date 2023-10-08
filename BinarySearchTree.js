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
  recursiveInsertion(val) {
    const node = new Node(val)
    if (this.root === null) {
      this.root = node
      return
    }

    function searchInsertPositionNode(root, direction = '') {
      if (root[direction] === null) return root
      if (val > root.value) {
        return searchInsertPositionNode(root.right, 'right')
      } else {
        return searchInsertPositionNode(root.left, 'left')
      }
    }
    const findNode = searchInsertPositionNode(this.root)
    if (val > findNode.val) findNode.right = node
    else findNode.left = node
    return this
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
  recursiveLookUp(value) {
    const lookUp = (root) => {
      if (root === null) return false

      if (root.value === value) return true

      if (root.value > value) {
        return lookUp(root.left)
      } else {
        return lookUp(root.right)
      }
    }
    return lookUp(this.root)
  }
  breadthFirstSearch() {
    const result = []
    let root = this.root
    const queue = [root]
    while (queue.length) {
      root = queue.shift()
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
      result.push(root.value)
    }
    console.log(result)
  }

  breadthFirstSearchRecursive() {
    const result = []
    const currentNode = this.root
    let queue = [currentNode]
    function recursive(queue) {
      if (queue.length === 0) return
      const currentNode = queue.shift()
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
      result.push(currentNode.value)
      recursive(queue)
    }
    recursive(queue)
    console.log(result)
  }
  DFSInOrder() {
    let root = this.root
    const stack = []
    const result = []
    while (root || stack.length) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      if (root) result.push(root.value)
      root = root.right
    }
    console.log(result, 'inOrder')
  }
  DFSInOrderR() {
    let root = this.root
    let result = []
    const inOrder = (root) => {
      if (root === null) return
      inOrder(root.left)
      result.push(root.value)
      inOrder(root.right)
    }
    inOrder(root)
    console.log(result, 'inOrderR')
  }
  DFSInPreOrder() {
    let root = this.root
    const stack = []
    const result = []
    while (root || stack.length) {
      if (root) result.push(root.value)
      if (root.right) stack.push(root.right)
      if (root.left) stack.push(root.left)
      root = stack.pop()
    }
    console.log(result, 'preOrder')
  }
  DFSInPreOrderR() {
    let root = this.root
    let result = []
    const preOrder = (root) => {
      if (root === null) return
      result.push(root.value)

      result(root.left)
      preOrder(root.right)
    }
    preOrder(root)
    console.log(result, 'preOrderR')
  }
  DFSInPostOrder() {
    let root = this.root
    let result = []
    const postOrder = (root) => {
      if (root === null) return
      postOrder(root.left)
      postOrder(root.right)
      result.push(root.value)
    }
    postOrder(root)
    console.log(result, 'postOrder')
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.recursiveInsertion(1)
tree.recursiveInsertion(0)
console.log(tree.recursiveInsertion(-1))
// console.log(tree.lookUp(9))
console.log(tree.recursiveLookUp(17))
// tree.breadthFirstSearch()
// tree.breadthFirstSearchRecursive()
// tree.DFSInOrder()
// tree.DFSInPreOrder()
tree.DFSInPostOrder()
// console.log(tree.root)
