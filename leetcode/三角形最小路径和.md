# [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/)

```javascript
var minimumTotal = function(triangle) {
  let temp = [...triangle]
  let row = triangle.length - 1

  while(row > 0) {
    const last = []
    temp[row - 1].forEach((item, index) => {
      last.push(item + Math.min(temp[row][index], temp[row][index + 1]))
    })
    temp[row - 1] = last
    row--
  }

  return temp[0][0]
};
```

想法：从倒数第二层判断，与底部加和的最小值，替换倒数第二层为最小值加和后的值，依次向上推，推到顶层结束，即为最小值
