// <- GOOD
const traverse = (node, targetSum, sum = 0) => {
  if (!node.left && !node.right) {
    return targetSum === sum + node.val;
  }
  sum = sum + node.val;
  let [x, y] = [false, false];
  if (node.left) x = traverse(node.left, targetSum, sum);
  if (node.right) y = traverse(node.right, targetSum, sum);
  return x || y;
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  return traverse(root, targetSum);
};
// GOOD ->

// <- BETTER
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }
  targetSum -= root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
// BETTER ->
