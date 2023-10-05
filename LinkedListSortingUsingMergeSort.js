function mergeSort(head) {
  if (head === null || head.next === null) return
  const left = head
  let right = getMidNode(head)
  const temp = right.next
  right.next = null
  right = temp
  return merge(mergeSort(left), mergeSort(right))
}

function getMidNode(head) {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

function merge(left, right) {
  const node = new ListNode(9999)
  const head = node
  let tail = node
  while (left && right) {
    if (left.val < right.val) {
      tail.next = left
      left = left.next
    } else {
      tail.next = right
      right = right.next
    }
    tail = tail.next
  }
  return head.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
