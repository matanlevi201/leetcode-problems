function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rightSideView = function (root) {
  const queue = root ? [root] : [];
  const answer = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (i + 1 === len) {
        answer.push(currentNode.val);
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return answer;
};

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root));
