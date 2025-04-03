var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let total = numbers[start] + numbers[end];

    if (total === target) {
      return [start + 1, end + 1];
    } else if (total > target) {
      end--;
    } else {
      start++;
    }
  }
};
