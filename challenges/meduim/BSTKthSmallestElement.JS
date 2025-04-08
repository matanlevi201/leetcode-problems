function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var kthSmallest = function (root, k) {
  const orderedValues = [];
  const inorderTraverse = (root) => {
    if (!root) return;

    inorderTraverse(root.left);
    orderedValues.push(root.val);
    inorderTraverse(root.right);
  };
  inorderTraverse(root);
  return orderedValues[k - 1];
};

var kthSmallest = function (root, k) {
  let level = k;
  let answer = 0;
  const traverse = (root) => {
    if (!root) return;
    traverse(root.left);
    if (level === 1) {
      answer = root.val;
      level--;
      return;
    }
    level--;
    traverse(root.right);
  };
  traverse(root);
  return answer;
};

// Input: root = [5,3,6,2,4,null,null,1]
// Output: 3
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
console.log(kthSmallest(root, 3));
