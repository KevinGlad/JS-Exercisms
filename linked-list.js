//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {

    this.list = {
      head: null,
      tail: null
    }

  }


  /* supporting functions */

  /* factory function to create a new node */
  createNode(prev = null, value = null, next = null) {

    return {
      prev,
      value,
      next
    }

  }

  deleteNode(node) {

    if (node != null) {

      let prevNode = node.prev
      let nextNode = node.next

      // check to see if we only have 1 node in list
      if (prevNode == null && nextNode == null) {

        this.list.head = null
        this.list.tail = null

      } else {

        // do we have a previous node
        if (prevNode == null) {

          //  we don't so adjust our list header
          this.list.head = nextNode
          nextNode.prev = null

        } else {

          // do we have a next node
          if (nextNode != null) {

            // we do so update the next nodes previous node pointer
            nextNode.prev = prevNode

          }

        }

        // do we have a next node
        if (nextNode == null) {

          // we don't so update the list tail node pointer
          this.list.tail = prevNode
          prevNode.next = null

        } else {

          if (prevNode != null) {

            prevNode.next = nextNode

          }

        }

      } // endif prev and next do not = null

    } // endif node == null

    return node

  }

  findNode(value) {

    let rtnNode = null
    let nextNode = this.list.head

    while (nextNode != null) {

      if (nextNode.value === value) {

        rtnNode = nextNode
        break;

      }

      nextNode = nextNode.next

    }

    return rtnNode
  }

  /* interface functions */
  push(value) {

    let newNode = this.createNode(this.list.tail, value, null)

    // if we have a tail update its next with the new noded
    if (this.list.tail != null) {
      this.list.tail.next = newNode
    }

    // update tail to point to the new node
    this.list.tail = newNode

    // check to see if this is the head node as well
    // if it is set the head node.  Only happens if list is empty
    if (newNode.prev == null) {
      this.list.head = newNode
    }

    return newNode.value

  }

  pop() {

    let lastNode = this.list.tail

    this.deleteNode(lastNode)

    return lastNode.value

  }

  shift() {

    let firstNode = this.list.head

    this.deleteNode(firstNode)

    return firstNode.value

  }

  unshift(value) {

    let newNode = this.createNode(null, value, this.list.head)

    // if we have a head update its prev with the new noded
    if (this.list.head != null) {
      this.list.head.prev = newNode
    }

    // update head to point to the new node
    this.list.head = newNode

    // check to see if this is the tail node as well
    // if it is set the head node.  Only happens if list is empty
    if (this.list.tail == null) {
      this.list.tail = newNode
    }

    return newNode.value
  }

  delete(value) {

    this.deleteNode(this.findNode(value))

  }

  count() {

    let nextNode = this.list.head
    let count = 0

    while (nextNode != null) {

      nextNode = nextNode.next
      count++

    }

    return count
  }

}

