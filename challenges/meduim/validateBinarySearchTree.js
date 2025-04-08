function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  if (!root) return true;
  if (root.left && root.left.val >= root.val) {
    return false;
  }
  if (root.right && root.right.val <= root.val) {
    return false;
  }
  return isValidBST(root.left) && isValidBST(root.right);
};

var isValidBST = function (root) {
  const ans = [];
  const getInOrder = (root) => {
    if (!root) return;

    getInOrder(root.left);
    ans.push(root.val);
    getInOrder(root.right);
  };
  getInOrder(root);
  for (let i = 0; i < ans.length; i++) {
    if (i + 1 < ans.length) {
      const left = ans[i];
      const right = ans[i + 1];
      if (left >= right) return false;
    }
  }
  return true;
};

// Input: root = [2,1,3]
// Output: true
// const root = new TreeNode(2);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);
// console.log(isValidBST(root));

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// const root = new TreeNode(5);
// root.left = new TreeNode(1);
// root.right = new TreeNode(4);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(6);
// console.log(isValidBST(root));

// Input: root = [5,4,6,null,null,3,7]
// Output: false
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);
console.log(isValidBST(root));
