# [122. Best Time to Buy and Sell Stock II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

```javascript
var maxProfit = function(prices) {
  const { length } = prices
  if (length < 2) return 0

  let res = 0
  let index = 1
  let operate = 'buy'
  while (index < length) {
    if (operate === 'buy') {
      if (prices[index - 1] < prices[index]) {
        if (index === length - 1) {
          res += prices[index] - prices[index - 1]
        } else {
          res -= prices[index - 1]
          operate = 'sell'
        }
      }
    } else {
      if (prices[index - 1] > prices[index]) {
        res += prices[index - 1]
        operate = 'buy'
      } else if (index === length - 1) {
        res += prices[index]
      }
    }
    index++
  }

  return res
};
```

第一次思路：如果目前是买入操作，后继价格高于当前价格可买，转换为卖出操作，当后继价格高于当前价格，可卖出
