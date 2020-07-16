# [剑指 Offer 29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

```javascript
var spiralOrder = function(matrix) {
  const temp = [...matrix]
  let { length } = matrix
  if (length === 0) return []
  const res = []
  while(length > 0) {
    if (length === 1) {
      res.concat(temp.pop())
    } else if (length === 2) {
      res.concat(temp.splice(0, 1), temp.pop().reverse())
    } else {
      console.log(temp)
      const step1 = temp.splice(0,1)
      const step2 = []
      const step3 = temp.pop()
      const step4 = []
      temp.forEach(i => {
        step2.push(i.pop())
        step4.unshift(i.splice(0,1))
      })
      console.log(step1, step2, step3, step4)
      res.concat(step1, step2, step3, step4)
      console.log(res)
    }
    length -= 2
  }
  return res
};
```
