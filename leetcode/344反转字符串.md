# [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

```javascript
var reverseString = function(s) {
  const { length } = s
  const len = Math.ceil(length/2)
  for (let i=0; i<len; i++) {
    [s[i], s[length - i - 1]] = [s[length - i - 1], s[i]]
  }
};
```

想法：折半，之后每一项和对应的后面项交换
