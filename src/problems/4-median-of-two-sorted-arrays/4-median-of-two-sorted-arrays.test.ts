import { findMedianSortedArrays } from "./4-median-of-two-sorted-arrays";

describe("4-median-of-two-sorted-arrayse", () => {
  test("given tests 1", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
  });
  test("given tests 2", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toStrictEqual(2.5);
  });

  test("given tests 3", () => {
    expect(findMedianSortedArrays([2], [])).toStrictEqual(2);
  });
});
