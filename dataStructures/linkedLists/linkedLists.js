// const basket = ['apples', 'grapes', 'pears']

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null 


// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next{
//         value: 16,
//         next: {
//           null
//         }
//       }
//     }
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: 10,
      next: null
    }
    this.tail = this.head
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    return this
  }
  prepend(value) {
    // Code here
    const firstNode = {
      value: value,
      next: null
    }
    firstNode.next = this.head
    this.head = firstNode
    this.length ++
    return this
  }
}

const myLinkedList = new LinkedList(10)


// console.log(myLinkedList);

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(15));
console.log(myLinkedList.prepend(99));