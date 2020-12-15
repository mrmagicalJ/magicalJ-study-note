# [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

```javascript
var rob = function(nums) {
  const { length } = nums
  if (length === 0) return 0
  if (length === 1) return nums[0]

  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < length; i++) {
    // 包含上一次的最大值 || 不包含上一次的最大值 + 当前值
    dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i]))
  }
  return dp[length - 1]
};
```

动态规划dp