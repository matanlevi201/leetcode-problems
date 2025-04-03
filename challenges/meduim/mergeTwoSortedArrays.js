export const mergeTwoSortedArrays = function (arr1, arr2) {
  const result = [];
  const [limit1, limit2] = [arr1.length, arr2.length];
  if (!limit1) {
    return arr2;
  }
  if (!limit2) {
    return arr1;
  }
  let [index1, index2] = [0, 0];
  while (index1 < limit1 || index2 < limit2) {
    const [value1, value2] = [arr1?.[index1], arr2?.[index2]];
    switch (true) {
      case !value1 && value1 !== 0:
        result.push(value2);
        index2 += 1;
        break;
      case !value2 && value2 !== 0:
        result.push(value1);
        index1 += 1;
        break;
      case value1 < value2:
        result.push(value1);
        index1 += 1;
        break;
      case value1 > value2:
        result.push(value2);
        index2 += 1;
        break;
      case value1 === value2:
        result.push(value1);
        index1 += 1;
        break;
      default:
        break;
    }
  }
  return result;
};
