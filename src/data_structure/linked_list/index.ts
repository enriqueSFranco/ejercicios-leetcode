interface LinkedListActions<T> {
  isEmpty: () => boolean
  push: (value: T) => void
  append: (value: T) => void
  insertAt: (value: T, index: number) => void
  pop: () => T | null
  clear: () => void
}

type NextNode<T> = NodeType<T> | null

interface NodeType<T> {
  value: T
  next: NextNode<T>
}

class Node<T> implements NodeType<T> {
  constructor(public value: T, public next: Node<T> | null) { }
}

export class LinkedList<T> implements LinkedListActions<T> {
  constructor(private head: Node<T> | null = null, private tail: Node<T> | null = null, private count: number = 0) { }

  private createNode (value: T): Node<T> {
    return new Node(value, null)
  }

  isEmpty (): boolean {
    return this.head === null
  }

  size (): number {
    return this.count
  }

  push (value: T): void {
    const node = this.createNode(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.count++
  }

  append (value: T): void {
    const node = this.createNode(value)

    if (this.isEmpty()) {
      this.head = node
    } else {
      if (this.tail !== null) {
        this.tail.next = node
      }
    }
    this.tail = node
    this.count++
  }

  insertAt (value: T, index: number): void {
    if (index < 0 || index > this.count) {
      throw new Error('Index out of bounds')
    } else if (index === 0) {
      this.push(value)
      return
    } else if (index === this.count) {
      this.append(value)
      return
    }
    const node = new Node(value, null)
    let currentNode: Node<T> | null = this.head

    for (let idx = 0; idx < index; idx++) {
      currentNode = currentNode.next
    }
    const nextNode = currentNode.next
    currentNode.next = node
    node.next = nextNode
  }

  pop (): T | null {
    if (this.isEmpty()) {
      return null
    }
    const node: Node<T> | null = this.head
    this.head = this.head.next
    this.count--

    return node.value
  }

  findMiddle (first: Node<T>, last: Node<T>): Node<T> | null {
    let slow = first
    let fast = first.next

    while (fast !== null && fast !== last) {
      fast = fast.next
      if (fast !== last) {
        slow = slow.next
        fast = fast.next
      }
    }
    return slow
  }

  findElement (value: T): Node<T> | null {
    if (this.isEmpty()) {
      return null
    }

    let low = this.head
    let high = this.tail

    while (low !== high) {
      const middle = this.findMiddle(low, high)

      if (middle === null) return null

      if (middle === value) {
        return middle
      } else if (middle.value < value) {
        low = middle.next
      } else {
        high = middle
      }
    }
  }

  clear (): void {
    this.head = null
    this.tail = null
    this.count = 0
  }

  log (): void {
    let currentNode = this.head

    while (currentNode !== null) {
      console.log(currentNode?.value)
      if (currentNode?.next !== undefined) {
        currentNode = currentNode?.next
      }
    }
  }
}

const linkedList = new LinkedList()

linkedList.push(1)
linkedList.push(2)
linkedList.push(3)

linkedList.log()
