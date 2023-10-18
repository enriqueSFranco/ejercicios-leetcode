interface StackActions<T> {
  isEmpty: () => boolean
  push: (value: T) => void
  pop: () => T | null
  peek: () => T | null
  size: () => number
}

class Node<T> {
  value: T
  next?: Node<T> | null

  constructor(value: T, next?: Node<T> | null) {
    this.value = value
    this.next = next
  }
}

export class Stack<T> implements StackActions<T> {
  constructor(private top: Node<T> | null = null, private count = 0) { }

  isEmpty (): boolean {
    return this.top === null
  }

  push (value: T): void {
    const newNode = new Node<T>(value)

    if (this.isEmpty()) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.count++
  }

  pop (): T | null {
    if (this.isEmpty()) {
      return null
    }

    const nodeToBeRemoved = this.top

    this.top = nodeToBeRemoved?.next
    this.count--
    return nodeToBeRemoved.value
  }

  peek (): T | null {
    return this.isEmpty() ? null : this.top.value
  }

  size (): number {
    return this.count
  }
}
