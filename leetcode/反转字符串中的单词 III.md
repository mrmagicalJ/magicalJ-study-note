# [557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)

```javascript
function reverseWords(s) {
  return s.split(` `).map(str => str.split(``).reverse().join(``)).join(` `)
}
```
