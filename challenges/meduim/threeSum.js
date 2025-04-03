var searchTriples = function (nums, leftBound, rightBound, target) {
  let start = leftBound;
  let end = rightBound;
  const subAnswer = [];

  while (start < end) {
    const sum = nums[start] + nums[end] + target;
    if (sum > 0) {
      end = end - 1;
    } else if (sum < 0) {
      start = start + 1;
    } else {
      subAnswer.push([target, nums[start], nums[end]]);
      start = start + 1;
      while (nums[start] === nums[start - 1] && start < end) {
        start = start + 1;
      }
    }
  }

  return subAnswer;
};

var threeSum = function (nums) {
  const answer = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    const target = sortedNums[i];
    const subAnswer = searchTriples(
      sortedNums,
      i + 1,
      sortedNums.length - 1,
      target
    );
    if (subAnswer.length) {
      answer.push(...subAnswer);
    }
  }
  return answer;
};

console.log(threeSum([0, 0, 0, 0]));
