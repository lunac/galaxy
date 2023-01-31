/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

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

const getSum = (n1?: Node, n2?: Node, complement = 0) => {
  const number = (n1?.val || 0) + (n2?.val || 0) + complement;
  return [number % 10, number >= 10 ? 1 : 0];
};

function addTwoNumbers(l1: Node, l2: Node): ListNode {
  const sumNodes = (n1: Node, n2: Node, complement = 0, lastNode: ListNode) => {
    if (n1 === null && n2 === null) {
      if (complement === 1 && lastNode)
        lastNode.next = new ListNode(complement);
      return;
    }
    const [val, residual] = getSum(n1, n2, complement);
    lastNode.next = new ListNode(val);
    sumNodes(n1?.next || null, n2?.next || null, residual, lastNode.next);
  };
  const [val, residual] = getSum(l1, l2);
  const head = new ListNode(val);
  sumNodes(l1?.next, l2?.next, residual, head);
  return head;
}
// @lc code=end

export { addTwoNumbers };
