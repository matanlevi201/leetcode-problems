function TreeNode(val, left, right, next) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  // for morris level order
  this.next = next === undefined ? null : next;
}

const inorder = function (root) {
  let curr = root;

  while (curr) {
    if (!curr.left) {
      console.log(curr.val);
      curr = curr.right;
    } else {
      let prev = curr.left;
      while (prev.right && prev.right !== curr) {
        prev = prev.right;
      }
      if (!prev.right) {
        prev.right = curr;
        curr = curr.left;
      } else {
        prev.right = null;
        console.log(curr.val);
        curr = curr.right;
      }
    }
  }
};

const preorder = function (root) {
  let curr = root;
  while (curr) {
    if (!curr.left) {
      console.log(curr.val);
      curr = curr.right;
    } else {
      let prev = curr.left;
      while (prev.right && prev.right !== curr) {
        prev = prev.right;
      }
      if (!prev.right) {
        prev.right = curr;
        console.log(curr.val);
        curr = curr.left;
      } else {
        prev.right = null;
        curr = curr.right;
      }
    }
  }
};

const levelorder = function (root) {
  let head = root;
  console.log(root.val);
  while (head) {
    let temp = new TreeNode(0);
    const dummy = temp;

    while (head) {
      if (head.left) {
        temp.next = head.left;
        temp = temp.next;
        console.log(temp.val);
      }
      if (head.right) {
        temp.next = head.right;
        temp = temp.next;
        console.log(temp.val);
      }
      head = head.next;
    }
    head = dummy.next;
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);
levelorder(root);
