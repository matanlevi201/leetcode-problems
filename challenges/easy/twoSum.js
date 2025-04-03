// TO(n^2)
// SO(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const firstPart = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const secondPart = nums[j];
      if (firstPart + secondPart === target && i !== j) {
        return [i, j];
      }
    }
  }
};

// TO(n)
// SO(n) - cause we create the hash table
const convertToHashTable = (arr) => {
  const hashTable = {};
  arr.forEach((element, i) => {
    hashTable[element] = i;
  });
  return hashTable;
};

var twoSum = function (nums, target) {
  const numsTable = convertToHashTable(nums);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsTable[complement] && numsTable[complement] !== i) {
      return [i, numsTable[complement]];
    }
  }
  return [];
};

// TO(n)
// SO(n) - cause we create the hash table
// Approach: one-pass hash table
var twoSum = function (nums, target) {
  const numsTable = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsTable[complement]) {
      return [i, numsTable[complement]];
    }
    numsTable[nums[i]] = i;
  }
  return [];
};

// new Map is better than object cause it checks for existence while object may return false on obj[key]: 0 even though it exists.
var twoSum = function (nums, target) {
  const numsTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsTable.has(complement)) {
      return [numsTable.get(complement), i];
    }
    numsTable.set(nums[i], i);
  }
  return [];
};
