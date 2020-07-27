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
  let res= []
  const m0 = {}
  const { length } = nums1
  for(let index = 0; index < length; index++) {
    const val = nums1[index]
    m0[val] = m0[val] ? m0[val] + 1 : 1
  }
  let k = 0
  const len = nums2.length
  for(let index = 0; index < len; index++) {
    const val = nums2[index]
    if (m0[val]) {
      res[k] = val
      m0[val]--
      k++
    }
  }
  return res
};
```
