# [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

```javascript
var climbStairs = function(n) {
  // 边界处理
  if ( n < 2) return n

  const dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp.push(dp[i - 1] + dp[i - 2])
  }
  return dp.pop()
};
```

思路：

第一阶与第二阶就不说了，基础条件
第三阶 = (爬到第一阶的所有方法 + 2阶) + (爬到第二阶的所有方法 + 1阶)
第四阶 = (爬到第二阶的所有方法 + 2阶) + (爬到第三阶的所有方法 + 1阶)
......
第n阶 = (爬到第**n-2**阶的所有方法 + 2阶) + (爬到第**n-1**阶的所有方法 + 1阶)
f(n) = f(n-2) + f(n-1)

动态规划dp

## 想到另一种方案

不管多少层，必有一个全是1的，之后每两个1用2替换，运用组合，直到无法再用2替换未知，相加即可

例如：5

1 + c(1, 4) + c(2, 3) = 1 + 4 + 3 = 8
