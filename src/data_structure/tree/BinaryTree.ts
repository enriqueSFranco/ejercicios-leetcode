class Node<T> {
  constructor(public value: T, public left?: Node<T> | null, public right?: Node<T> | null) { }
}

export class BinaryTree<T> {
  constructor(private root: Node<T> | null) { }

  isEmpty (): boolean {
    return this.root === null
  }

  insert (value: T): void {
    const newNode = new Node(value)

    if (this.isEmpty()) {
      this.root = newNode
    } else {
      if (this.root !== null) {
        this.insertNode(this.root, newNode)
      }
    }
  }

  private insertNode (node: Node<T>, newNode: Node<T>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        if (node.left !== undefined) {
          this.insertNode(node.left, newNode)
        }
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        if (node.right !== undefined) {
          this.insertNode(node.right, newNode)
        }
      }
    }
  }

  search (target: T): Node<T> | null {
    return this.searchNode(this.root, target)
  }

  private searchNode (root: Node<T>, value: T): Node<T> | null {
    if (root === null || root === undefined) { return null }

    if (root.value === value) { return root }
    else if (root.value < value) {
      // TODO: Buscar por la derecha
      return this.searchNode(root.right, value)
    } else {
      // TODO: Buscar por la izquierda
      return this.searchNode(root.left, value)
    }
  }
}
