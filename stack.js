class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      node.next = temp;
    }
    return ++this.size;
  }

  pop() {
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
    let arr = [];
    let current = this.first;
    for (let i = 0; i < this.size; i++) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new Stack();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
list.pop();
console.log(list.print());
