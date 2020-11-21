class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return false;
    const node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  shift() {
    if (this.length === 0) return false;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      node.next = null;
      this.head.prev = null;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let current;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let node = new Node(val);
    let beforeNode = this.get(index);
    beforeNode.prev.next = node;
    node.prev = beforeNode.prev;
    node.next = beforeNode;
    beforeNode.prev = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.length--;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.insert(2, "a"));
console.log(list.print());
list.set(2, "b");
console.log(list.print());
list.remove(2);
console.log(list.print());
