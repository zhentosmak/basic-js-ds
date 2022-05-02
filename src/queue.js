const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {

  constructor(arr) {
    this.arr = [];
  }

  getUnderlyingList() {
    function createList(arr){
      let list = new ListNode(arr[0]);      
      let current = list;
      for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next
      }    
      return list
    }
    return createList(this.arr)
  }  

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};
