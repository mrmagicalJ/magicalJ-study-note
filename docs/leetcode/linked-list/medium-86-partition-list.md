# [86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let leftHead = null
    let leftList = null
    let rightHead = null
    let rightList = null

    function sort(now, x) {
        let leftHead = null
        let leftList = null
        let rightHead = null
        let rightList = null

        function sort(now, x) {
            if (!now) {
                if (rightList) {
                    rightList.next = null
                }
                if (leftHead) {
                    leftList.next = rightHead
                    return leftHead
                }
                return rightHead
            }

            if (now.val < x) {
                if (leftList) {
                    leftList.next = now
                } else {
                    leftHead = now
                }
                leftList = now
            } else {
                if (rightList) {
                    rightList.next = now
                } else {
                    rightHead = now
                }
                rightList = now
            }

            return sort(now.next, x)
        }

        return sort(head, x)
    }

    return sort(head, x)
};
```