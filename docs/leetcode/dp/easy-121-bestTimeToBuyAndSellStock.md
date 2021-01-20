# [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

```javascript
var maxProfit = function(prices) {
  const { length } = prices
  // 边界处理
  if ( length < 1) return 0

  let max = 0
  let accumulate = 0
  let earn = 0
  for(let i = 1; i < length; i++) {
    earn = prices[i] - prices[i - 1]
    accumulate = accumulate > 0 ? accumulate + earn : earn
    max = Math.max(max, accumulate)
  }
  return max
};
```

思路：
最多一次交易，就是找到最大差值
一共两种情况，上涨和下跌，下跌后上涨是一个拐点，只需要判断拐点之前累积的是正还是负，正的话继续叠加收益，负的话代表前一个差值已经结束了，本次为新买入点，到最后取差值的最大值即可

```javascript
var maxProfit = function(prices) {
  const { length } = prices
  // 边界处理
  if ( length < 1) return 0

  const dp = [[0, -prices[0]]]
  
};
```

思路：

每一天只有两种选择：买或者不买，相应每种情况的前一天也是两种，所以总共有四种情况：

- 今天不持有
  - 前一天持有，今天卖出
  - 前一天不持有，今天继续不持有
- 今天持有
  - 前一天持有，今天继续持有
  - 前一天不持有，今天买入
