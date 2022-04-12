# [82. 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    const second = head.next

    function findUntilDiff(head) {
        return head.val === head.next?.val ? findUntilDiff(head.next) : deleteDuplicates(head.next)
    }

    if (head.val === second.val) {
        head = findUntilDiff(second)
    } else {
        head.next = deleteDuplicates(second)
    }
    return head
};
```