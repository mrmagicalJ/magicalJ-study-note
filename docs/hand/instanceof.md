# instanceof

使用循环

```javascript
function instanceOf(obj, target) {
  let proto = Object.getPrototypeOf(obj)
  let prototype = target.prototype
  while(true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
```

使用递归

```javascript
function instanceOf(obj, target) {
  let proto = Object.getPrototypeOf(obj)
  let prototype = target.prototype

  if (proto === null) return false
  if (proto === prototype) return true
  return instanceOf(proto, target)
}
```
