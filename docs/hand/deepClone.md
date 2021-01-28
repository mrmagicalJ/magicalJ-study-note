# deepClone

```javascript
function deepClone(obj) {
  let res = {}

  // const keys = [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
  const keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    let item = obj[key]
    if (typeof item === 'object' && item) {
      res[key] = deepClone(item)
    } else {
      res[key] = item
    }
  })
  
  return res
}
```
