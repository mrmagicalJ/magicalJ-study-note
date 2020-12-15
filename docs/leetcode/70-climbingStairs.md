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
