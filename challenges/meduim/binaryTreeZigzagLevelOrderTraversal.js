function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var zigzagLevelOrder = function (root) {
  const queue = root ? [root] : [];
  const answer = [];
  let levelIndex = 0;
  while (queue.length) {
    const len = queue.length;
    const level = queue.map(() => null);
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      const index = levelIndex % 2 === 0 ? i : len - 1 - i;
      level[index] = currentNode.val;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    levelIndex = levelIndex + 1;
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
console.log(zigzagLevelOrder(root));
