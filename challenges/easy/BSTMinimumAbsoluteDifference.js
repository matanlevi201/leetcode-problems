function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var getMinimumDifference = function (root) {
  const orderedValues = [];
  const inorderTraverse = (root) => {
    if (!root) return;

    inorderTraverse(root.left);
    orderedValues.push(root.val);
    inorderTraverse(root.right);
  };
  inorderTraverse(root);
  let minDiff = orderedValues[0] + orderedValues[1];
  for (let i = 0; i < orderedValues.length; i++) {
    if (i + 1 < orderedValues.length) {
      const first = orderedValues[i];
      const second = orderedValues[i + 1];
      const diff = second - first;
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
  }
  return minDiff;
};

// Input: root = [4,2,6,1,3]
// Output: 1
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(getMinimumDifference(root));
