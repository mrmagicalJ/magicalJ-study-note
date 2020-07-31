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

```javascript
var intersect = function(nums1, nums2) {
  const res = []
  const { length: len1 } = nums1
  const { length: len2 } = nums2
  const temp = {}
  let i = 0

  for(; i < len1; i++) {
    const val = nums1[i]
    temp[val] = temp[val] ? temp[val] + 1 : 1
  }
  for(i = 0; i < len2; i++) {
    const val = nums2[i]
    if (temp[val]) {
      res.push(val)
      temp[val]--
    }
  }

  return res
};
```
