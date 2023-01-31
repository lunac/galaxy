/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

import { ListNode } from "./2.add-two-numbers";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

type Node = ListNode | null | undefined;

function addTwoNumbers(l1: Node, l2: Node): ListNode {
  const getSum = (n1 = 0, n2 = 0, complement = 0) => {
    const number = n1 + n2 + complement;
    return { val: number % 10, residual: number >= 10 ? 1 : 0 };
  };
  const firstSum = getSum(l1?.val, l2?.val);
  const head = new ListNode(firstSum.val);

  let pivot = head;
  let complement = firstSum.residual;
  l1 = l1?.next || null;
  l2 = l2?.next || null;

  while (l1 != null && l2 != null) {
    const { val, residual } = getSum(l1?.val, l2?.val, complement);
    pivot.next = new ListNode(val);
    pivot = pivot.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
    complement = residual;
  }
  pivot.next = l1 != null ? l1 : l2;
  while (complement != 0) {
    const { val, residual } = getSum(0, pivot?.next?.val, complement);
    if (pivot.next) {
      pivot.next.val = val;
    } else {
      pivot.next = new ListNode(val);
    }
    pivot = pivot.next;
    complement = residual;
  }

  return head;
}
// @lc code=end

export { addTwoNumbers };
