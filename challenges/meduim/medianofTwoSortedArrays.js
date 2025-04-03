export const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    // Ensure nums1 is the smaller array
    [nums1, nums2] = [nums2, nums1];
  }

  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;

  let left = 0;
  let right = len1;

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((totalLen + 1) / 2) - partition1;

    const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const right1 = partition1 === len1 ? Infinity : nums1[partition1];
    const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const right2 = partition2 === len2 ? Infinity : nums2[partition2];

    if (left1 <= right2 && left2 <= right1) {
      if (totalLen % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }
};
