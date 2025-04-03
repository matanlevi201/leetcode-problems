var search = function (nums, target) {
  let midIndex = Math.floor(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;

  while (end - start >= 0) {
    if (nums[midIndex] === target) {
      return midIndex;
    }
    if (nums[midIndex] > target) {
      end = midIndex - 1;
      midIndex = Math.floor((start + end) / 2);
    }
    if (nums[midIndex] < target) {
      start = midIndex + 1;
      midIndex = Math.floor((start + end) / 2);
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
