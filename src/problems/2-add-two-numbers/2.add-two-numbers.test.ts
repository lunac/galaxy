// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

import { addTwoNumbers, ListNode } from "./2.add-two-numbers";
import { addTwoNumbers as addTwoNumbersIterative } from "./2.add-two-numbers|iterative";

const arr2List = (arr: number[]) => {
  const firstNode = new ListNode(arr[0]);
  arr.slice(1).reduce((pv: ListNode, cv: number) => {
    pv.next = new ListNode(cv);
    return pv.next;
  }, firstNode);
  return firstNode;
};

describe("given tests", () => {
  test("given tests 1", () => {
    expect(
      addTwoNumbers(arr2List([2, 4, 3]), arr2List([5, 6, 4]))
    ).toStrictEqual(arr2List([7, 0, 8]));
  });
  test("given tests 2", () => {
    expect(addTwoNumbers(arr2List([0]), arr2List([0]))).toStrictEqual(
      arr2List([0])
    );
  });
  test("given tests 3", () => {
    expect(
      addTwoNumbers(arr2List([9, 9, 9, 9, 9, 9, 9]), arr2List([9, 9, 9, 9]))
    ).toStrictEqual(arr2List([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});

describe("given tests | iterative", () => {
  test("given tests 1", () => {
    expect(
      addTwoNumbersIterative(arr2List([2, 4, 3]), arr2List([5, 6, 4]))
    ).toStrictEqual(arr2List([7, 0, 8]));
  });
  test("given tests 2", () => {
    expect(addTwoNumbersIterative(arr2List([0]), arr2List([0]))).toStrictEqual(
      arr2List([0])
    );
  });
  test("given tests 3", () => {
    expect(
      addTwoNumbersIterative(
        arr2List([9, 9, 9, 9, 9, 9, 9]),
        arr2List([9, 9, 9, 9])
      )
    ).toStrictEqual(arr2List([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
