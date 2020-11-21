class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    const node = this.first;
    if (this.first === this.last) {
      this.last.next = null;
    }
    this.first = this.first.next;
    this.size--;
    return node.val;
  }

  print() {
    const arr = [];
    let current = this.first;
    for (let i = 0; i < this.size; i++) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new Queue();
list.enqueue(0);
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.print();

list.dequeue();
list.print();
list.dequeue();
list.print();
list.dequeue();
list.print();
