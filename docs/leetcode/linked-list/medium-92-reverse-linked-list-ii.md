# [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const length = right - left;
    if (length < 1) return head

    let newHead = null
    let leftStart = null;
    let surPlusHead = null

    if (left === 1) {
        for (let i = 0; i < length; i++) {
            head.next.pre = head
            head = head.next
        }
        surPlusHead = head.next
        newHead = head
        for (let i = 0; i < length; i++) {
            head.next = head.pre
            head = head.pre
        }
        head.next = surPlusHead
    } else {
        newHead = head
        for (let i = 2; i < left; i++) {
            head = head.next
        }
        leftStart = head
        head = head.next
        for (let i = 0; i < length; i++) {
            head.next.pre = head
            head = head.next
        }
        surPlusHead = head.next
        leftStart.next = head
        for (let i = 0; i < length; i++) {
            head.next = head.pre
            head = head.pre
        }
        head.next = surPlusHead
    }

    return newHead
};
```