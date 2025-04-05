function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var averageOfLevels = function (root) {
  const queue = [root];
  const answer = [];
  while (queue.length) {
    const len = queue.length;
    let levelSum = 0;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      levelSum = levelSum + currentNode.val;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    answer.push(levelSum / len);
  }
  return answer;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(15);
console.log(averageOfLevels(root, root.left, root.right));
