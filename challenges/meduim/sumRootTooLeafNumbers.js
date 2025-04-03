function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sumNumbers = function (root, pathNumber = "") {
  if (!root.left && !root.right) {
    return Number(pathNumber + root.val ?? "");
  }
  let x = 0;
  let y = 0;
  if (root.left) x = sumNumbers(root.left, pathNumber + root.val ?? "");
  if (root.right) y = sumNumbers(root.right, pathNumber + root.val ?? "");

  return x + y;
};

// Input: root = [1,2,3]
// Output: 25
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// console.log(sumNumbers(root));

// Input: root = [4,9,0,5,1]
// Output: 1026
// const root = new TreeNode(4);
// root.left = new TreeNode(9);
// root.right = new TreeNode(0);
// root.left.left = new TreeNode(5);
// root.left.right = new TreeNode(1);
// console.log(sumNumbers(root));

// Input: root = [0,1]
// Output: 1
// const root = new TreeNode(0);
// root.left = new TreeNode(1);
// console.log(sumNumbers(root));

// Input: root = [1,0]
// Output: 10
const root = new TreeNode(1);
root.left = new TreeNode(0);
console.log(sumNumbers(root));
