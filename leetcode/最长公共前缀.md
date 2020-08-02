# [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

```javascript
var longestCommonPrefix = function(strs) {
  const { length } = strs
  let res = ''
  let index = 0
  let now = ''

  if (!strs.length) {
    return res
  }

  while(true){
    now = strs[0][index]
    for (let i = 0; i < length; i++) {
      if(now !== strs[i][index] || now === undefined) {
        return res
      }
    }
    res += now
    index++
  }
};
```

```javascript
var longestCommonPrefix = function(strs) {
  const { length } = strs
  if (!length) {
    return ''
  }
  let res = strs[0]
  let now = ''

  for(let i = 1; i < length; i++) {
    now = strs[i]
    while(res!== '' && !now.startsWith(res)) {
      res = res.substring(0, res.length - 1)
    }
  }

  return res
};
```
