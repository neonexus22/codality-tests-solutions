class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (node.value === current.value) return undefined;
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (true) {
      if (current.value === value) return current;
      else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return undefined;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return undefined;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) return ralse;
    let current = this.root;
    while (true) {
      if (current.value === value) return true;
      else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }

  BFS() {
    const queue = [];
    const visited = [];
    let current;
    if (!this.root) return [];
    queue.push(this.root);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  DFSPreorder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.DFSInorder());
