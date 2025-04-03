// TO(O(log10(x)+1)) - this is because the iteration is based on the number of digits.
// Example: if x === 1000 THAN log10(1000) = 3 => 10^3 = 1000
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let num = x;
  let reversedNumber = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return x === reversedNumber;
};
