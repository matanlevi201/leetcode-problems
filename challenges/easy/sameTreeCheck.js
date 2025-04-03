// BAD
var getNodeValues = function (root, values = []) {
  if (!root) {
    values.push(root);
    return values;
  }
  values.push(root.val);
  getNodeValues(root.left, values);
  getNodeValues(root.right, values);
  return values;
};

var isSameTree = function (p, q) {
  const pValues = getNodeValues(p);
  const qValues = getNodeValues(q);
  if (pValues.length !== qValues.length) return false;
  for (let i = 0; i < pValues.length; i++) {
    if (pValues[i] !== qValues[i]) return false;
  }
  return true;
};

// GOOD
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p && q && p.val == q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};
