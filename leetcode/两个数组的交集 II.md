# [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

```javascript
var intersect = function(nums1, nums2) {
  const temp = [...nums2]
  return nums1.reduce((acc, cur) => {
    const index = temp.indexOf(cur)
    return index === -1 ? acc : [...acc, temp.splice(index, 1)]
  }, [])
};
```
