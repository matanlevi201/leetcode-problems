function _Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

var connect = function (root) {
  let head = root;

  while (head) {
    let temp = new _Node(0);
    const dummy = temp;

    while (head) {
      if (head.left) {
        temp.next = head.left;
        temp = temp.next;
      }
      if (head.right) {
        temp.next = head.right;
        temp = temp.next;
      }
      head = head.next;
    }
    head = dummy.next;
  }
  return root;
};
