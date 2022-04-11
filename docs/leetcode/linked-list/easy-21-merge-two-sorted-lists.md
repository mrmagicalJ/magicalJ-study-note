# [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        res = new ListNode(list1.val, mergeTwoLists(list1.next, list2))
    } else {
        res = new ListNode(list2.val, mergeTwoLists(list1, list2.next))
    }
    return res
};
```
