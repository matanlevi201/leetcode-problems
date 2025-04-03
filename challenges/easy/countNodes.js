// <- WORKS
var countNodes = function (root) {
  if (!root) return 0;
  const queue = [root];
  let nodeCount = 0;
  while (queue.length) {
    const len = queue.length;
    nodeCount = nodeCount + len;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return nodeCount;
};
// WORKS ->

// <- GOOD
var countNodes = function (root) {
  const count = (node) => {
    if (!node) return 0;
    return 1 + count(node.left) + count(node.right);
  };
  return count(root);
};
// GOOD ->

// <- GOOD
var countNodes = function (root) {
  const count = (node) => {
    if (!node) return 0;
    return 1 + count(node.left) + count(node.right);
  };
  return count(root);
};
// GOOD ->

// <- BEST
var countNodes = function (root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// BEST ->
