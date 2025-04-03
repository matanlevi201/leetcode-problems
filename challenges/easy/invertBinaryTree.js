var invertTree = function (root) {
  if (!root) return root;
  const temp = root.left;
  root.left = anchor.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
