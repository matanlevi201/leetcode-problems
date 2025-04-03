function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (end - start >= 0) {
    if (!isAlphanumeric(s[end])) {
      end = end - 1;
      continue;
    }
    if (!isAlphanumeric(s[start])) {
      start = start + 1;
      continue;
    }
    if (s[end].toLowerCase() !== s[start].toLowerCase()) {
      return false;
    }
    start = start + 1;
    end = end - 1;
  }

  return true;
};

var isPalindrome = function (s) {
  const trimedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = trimedStr.length - 1;

  while (end - start >= 0) {
    if (trimedStr[end].toLowerCase() !== trimedStr[start].toLowerCase()) {
      return false;
    }
    start = start + 1;
    end = end - 1;
  }

  return true;
};
