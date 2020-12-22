# [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```javascript
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  const res = [1, 2]
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2])
  }
  return res.pop()
};
```

动态规划dp

## 想到另一种方案

不管多少层，必有一个全是1的，之后每两个1用2替换，运用组合，直到无法再用2替换未知，相加即可

例如：5

1 + c(1, 4) + c(2, 3) = 1 + 4 + 3 = 8
