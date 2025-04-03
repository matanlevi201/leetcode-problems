// BFS
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    depth = depth + 1;
  }

  return depth;
};

// DFS
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
