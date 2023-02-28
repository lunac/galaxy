/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start

const compare = (
  num1: number | undefined,
  num2: number | undefined
): boolean => {
  if (num1 === undefined) return false;
  if (num2 === undefined) return true;
  return num1 < num2;
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length,
    n = nums2.length;
  const isOdd = (m + n) % 2 !== 0;
  const limit = Math.floor((m + n) / 2) + (isOdd ? 0 : -1);
  let i = 0,
    j = 0;
  while (i + j < limit) {
    if (compare(nums1[i], nums2[j])) i = i + 1;
    else j = j + 1;
  }
  if (!isOdd) {
    const bottom = compare(nums1[i], nums2[j]) ? nums1[i] : nums2[j];
    if (compare(nums1[i], nums2[j])) i = i + 1;
    else j = j + 1;
    const top = compare(nums1[i], nums2[j]) ? nums1[i] : nums2[j];
    return bottom + top > 0 ? (bottom + top) / 2 : 0;
  } else {
    return compare(nums1[i], nums2[j]) ? nums1[i] : nums2[j];
  }
}

// @lc code=end

export { findMedianSortedArrays };
