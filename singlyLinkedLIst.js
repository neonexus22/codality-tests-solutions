class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  pop() {
    let val = null;
    if (this.length === 0) return null;
    if (this.length === 1) {
      val = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let current = this.head;
      let tail = null;
      while (current.next) {
        tail = current;
        current = current.next;
      }
      tail.next = null;
      this.tail = tail;
      val = current;
      this.length--;
    }
    return val;
  }

  shift() {
    if (this.length === 0) return null;
    let oldhead = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    oldhead.next = null;
    this.length--;
    return oldhead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let val = this.head;
    for (let i = 1; i <= index; i++) {
      val = val.next;
    }
    return val;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insertAt(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    const node = new Node(val);
    const previousNode = this.get(index - 1);
    const temp = previousNode.next;
    previousNode.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev;
    for (let i = 0; i < this.length; i++) {
      prev = node.next;
      node.next = next;
      next = node;
      node = prev;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("nitesh");
list.push("nikhil");
list.push("nishant");

console.log(list.unshift("Mom"));
// console.log("here", list.set(4, "neo"));
console.log(list.print());
console.log(list.reverse().print());
// console.log(list.print());
