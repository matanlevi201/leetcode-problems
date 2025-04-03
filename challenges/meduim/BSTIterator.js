function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var BSTIterator = function (root) {
  this.stack = [];
  this.index = 0;
  this.traverse = (root) => {
    if (!root) return;

    this.traverse(root.left);
    this.stack.push(root.val);
    this.traverse(root.right);
  };
  this.traverse(root);
};

BSTIterator.prototype.next = function () {
  const value = this.stack[this.index];
  this.index = this.index + 1;
  return value;
};

BSTIterator.prototype.hasNext = function () {
  if (this.index >= this.stack.length) return false;
  return !!this.stack[this.index] || this.stack[this.index] === 0;
};

// Input: root = [7, 3, 15, null, null, 9, 20]
// Output: 1026
const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

const bSTIterator = new BSTIterator(root);
console.log(bSTIterator.next()); // return 3
console.log(bSTIterator.next()); // return 7
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 9
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 15
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 20
console.log(bSTIterator.hasNext()); // return False
