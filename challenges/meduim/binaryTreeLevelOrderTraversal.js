function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  const queue = root ? [root] : [];
  const answer = [];
  while (queue.length) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    answer.push(level);
  }
  return answer;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(15);
console.log(averageOfLevels(root));
