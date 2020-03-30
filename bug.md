# 踩过的坑

## 关于es6对象方法简写

```javascript
let test = {
  b: function () {
    console.log(1)
  }
}
// 下面不完全等价于上面
let test = {
  b () {
    console.log(1)
  }
}
new test.b
// 正常写法会正常执行，简写会报 test.b is not a constructor
```
