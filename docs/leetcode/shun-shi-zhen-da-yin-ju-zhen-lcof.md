# [剑指 Offer 29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

```javascript
var spiralOrder = function(matrix) {
  const temp = [...matrix]
  let { length } = matrix
  if (length === 0) return []
  const res = []
  while(length > 0) {
    if (temp[0].length === 0) return res
    if (length === 1) {
      res.push(...temp.pop())
    } else if (length === 2) {
      res.push(...temp.splice(0, 1)[0], ...temp.pop().reverse())
    } else {
      const step1 = temp.splice(0,1)[0]
      const step2 = []
      const step3 = temp.pop().reverse()
      const step4 = []
      temp.forEach(i => {
        step2.push(i.pop())
        if (i.length > 0) step4.unshift(i.splice(0,1)[0])
      })
      console.log(step1, step2, step3, step4)
      res.push(...step1, ...step2, ...step3, ...step4)
    }
    length -= 2
  }
  return res
};
```
