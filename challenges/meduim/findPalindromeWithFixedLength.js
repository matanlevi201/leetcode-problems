const isPalindrome = (num) => {};

const getNextPalindrome = (query, intLength) => {
  const index = 0;
  const isNextPalindrome = 1 * intLength * 10;
  while (index > query) {}
};

var kthPalindrome = function (queries, intLength) {
  const answer = [];
  const base = intLength % 2 === 0 ? intLength / 2 : Math.ceil(intLength / 2);
  const start = 10 ** (base - 1);
  const end = 10 ** base - 1;
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const halfPal = start + query - 1;
    if (halfPal > end) {
      answer.push(-1);
      continue;
    }
    const reversedHalfPal = `${halfPal}`.split("").reverse().join("");
    answer.push(Number(`${halfPal}` + reversedHalfPal.slice(intLength % 2)));
  }
  return answer;
};
