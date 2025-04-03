var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < s.length && tIndex < t.length) {
    const target = s[sIndex];
    if (target === t[tIndex]) {
      sIndex = sIndex + 1;
      tIndex = tIndex + 1;
      continue;
    }
    tIndex = tIndex + 1;
  }

  return sIndex === s.length;
};
