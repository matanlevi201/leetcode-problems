// first solution
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    const rightHeight = height[end];
    const leftHeight = height[start];
    let area = 0;
    if (rightHeight > leftHeight) {
      area = leftHeight * (end - start);
      start = start + 1;
    } else if (rightHeight < leftHeight) {
      area = rightHeight * (end - start);
      end = end - 1;
    } else {
      area = rightHeight * (end - start);
      const nextleft = height[start + 1];
      const nextRight = height[end - 1];
      if (nextleft > nextRight) {
        start = start + 1;
      } else {
        end = end - 1;
      }
    }

    max = max < area ? area : max;
  }

  return max;
};

// optimized
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    const horizantalLen = end - start;
    const verticalLen = Math.min(height[end], height[start]);
    const area = horizantalLen * verticalLen;
    max = max < area ? area : max;
    if (height[start] < height[end]) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }

  return max;
};
