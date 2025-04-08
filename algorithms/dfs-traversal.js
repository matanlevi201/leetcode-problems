function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preorder = (root) => {
  if (!root) return;

  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

const inorder = (root) => {
  if (!root) return;

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

// Input: root = [4,2,6,1,3]
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
inorder(root);
