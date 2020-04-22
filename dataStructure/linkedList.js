class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// class LinkedList {
//   constructor() {
//     this.head = new Node(`head`)
//   }
//   find(element) {
//     let curNode = this.head
//     while(curNode && curNode.element !== element) {
//       curNode = curNode.next
//     }
//     return curNode
//   }
//   insert(newElement, element) {
//     const newNode = new Node(newElement)
//     const cur = this.find(element)
//     newNode.next = cur && cur.next
//     cur.next = newNode
//   }
//   display() {
//     let cur = this.head
//     while(cur.next !== null) {
//       console.log(cur.next.item)
//       cur = cur.next
//     }
//   }
// }
const defaultEquals = (a, b) => a === b
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = void 0
    this.equalsFn = equalsFn
  }
  push(element) {
    const node  = new Node(element)
    let cur = null

    if (this.head == null) {
      this.head = node
    } else {
      cur = this.head
      while(cur.next != null) {
        cur = cur.next
      }
      cur.next = node
    }

    this.count++
  }
  removeAt(index) {
    if (index > 0 && index < this.count) {
      let cur = this.head
      if (index === 0) {
        this.head = cur.next
      } else {
        let prev
        for (let i = 0; i < index; i++) {
          prev = cur
          cur = cur.next
        }
        prev.next = cur.next
      }

      this.count--
      return cur.element
    }
    return undefined
  }
  display() {
    let cur = this.head
    while(cur != null) {
      console.log(cur.element)
      cur = cur.next
    }
  }
}

let cities = new LinkedList()
cities.push(`Beijing`)
cities.push(`Shanghai`)
// cities.insert(`Beijing`, `asd`)
// cities.insert(`Shanghai`, `Beijing`)
// cities.insert(`Guangzhou`, `Shanghai`)

cities.display()