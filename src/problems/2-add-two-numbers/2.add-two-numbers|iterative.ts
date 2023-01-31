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
    return [number % 10, number >= 10 ? 1 : 0];
  };
  const [fval, fcomplement] = getSum(l1?.val, l2?.val);
  const head = new ListNode(fval);

  let pivot = head;
  let complement = fcomplement;
  l1 = l1?.next || null;
  l2 = l2?.next || null;

  while (l1 || l2 || complement) {
    const [val, residual] = getSum(l1?.val, l2?.val, complement);
    pivot.next = new ListNode(val);
    pivot = pivot.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
    complement = residual;
  }
  pivot.next = l1 != null ? l1 : l2;

  return head;
}
// @lc code=end

export { addTwoNumbers };
