function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var flatten = function (root) {
//   if (!root) return null;
//   const left = root.left;
//   const right = root.right;
//   root.left = null;
//   root.right = left;
//   flatten(left);
//   const x = flatten(right);
//   let temp = root;
//   while (temp.right) {
//     temp = temp.right;
//   }
//   temp.right = x;
//   return root;
// };

// using morris and O(1)
var flatten = function (root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let prev = curr.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
  return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);
console.log(flatten(root));
