interface LinkedListActions<T> {
  isEmpty: () => boolean
  push: (value: T) => void
  append: (value: T) => void
  insertAt: (value: T, index: number) => void
  pop: () => T | null
}

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) { }
}

export class LinkedList<T> implements LinkedListActions<T> {
  private count: number

  constructor(private head: Node<T>, private tail: Node<T>) {
    this.count = 0
  }

  private createNode (value: T): Node<T> {
    return new Node(value)
  }

  isEmpty (): boolean {
    return this.head === null
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
      this.tail.next = node
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
    const node = new Node(value)
    let currentNode: Node<T> | null = this.head

    for (let idx = 0; idx < index; idx++) {
      currentNode = currentNode?.next
    }
    const nextNode = currentNode?.next
    currentNode?.next = node
    node.next = nextNode
  }

  pop (): T | null {
    if (this.isEmpty()) {
      throw new Error('Index out of bounds')
    }
    const node = this.head
    this.head = this.head.next
    this.count--

    return node.value
  }
}
