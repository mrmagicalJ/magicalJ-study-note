# [696. 计数二进制子串](https://leetcode-cn.com/problems/count-binary-substrings/)

```javascript
function countBinarySubstrings(s) {
  const match = s => {
    // 获取第一个值
    let start = s[0]
    // 找到和第一个值一样连续的最长串 00111100 => 00
    const matched = s.match(new RegExp(`^${start}+`))[0]
    // 最长串拼接想通长度的 00 => 0011
    const target = matched.padEnd(matched.length * 2, 1 - start)
    // 返回是否匹配
    return s.startsWith(target)
  }

  let res = 0
  // 从头匹配，每次向后推一位，直到剩下一位 0011 => 011 => 11
  while (s.length > 1) {
    match(s) && res++
    s = s.substring(1)
  }
  return res
}
```
