# lodash 相关

当我们设置界限的时候，可以使用`Math.max` || `Math.min`
例如，我们需要一个参数不小于0，如果小于0则变为0，`Math.max(num, 0)`

获取数组长度
const { length } = array

`isNaN`存在一个问题，就是如果传入的不是`Number`类型，会尝试将其转化为`Number`类型再判断，这会导致`isNaN('abc')`返回`true`，可以理解为isNaN就是判断一个值是不是`Number`类型，或者是否可以转化为`Number`类型，如果想要判断NaN本身，es6在`Number`对象上扩展了`isNaN`方法，或者如下

```javascript
function baseIsNaN (value) {
  return value !== value
}
```

判断整数

```javascript
function isInt (value) {
  return value % 1 === 0
}
```
