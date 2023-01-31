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
  const head = new ListNode(0);

  let pivot = head;
  let complement = 0;

  while ((l1 && l2) || complement) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + complement || 0;
    pivot.next = new ListNode(sum % 10);
    pivot = pivot.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
    complement = sum > 9 ? 1 : 0;
  }
  pivot.next = l1 != null ? l1 : l2 || null;

  return head.next as ListNode;
}

// @lc code=end

export { addTwoNumbers };
