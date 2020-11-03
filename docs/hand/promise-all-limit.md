# promise.all 限流版本（未加reject）

```javascript
function limitPromiseAll (list, limit = 3) {
  return new Promise((resolve, reject) => {
    let result = []
    const { length } = list
    let finish = 0
    let now = 0

    const iterator = {
      next:() => now < length ?
        { value: { item: list[now], index: now++ }, done: false} :
        { value: undefined, done: true }
    }

    function execute(iterator) {
      const { value, done } = iterator.next()
      if (done) return

      const { item, index } = value
      item.then(res => {
        result[index] = res
        ++finish === length ? resolve(result) : execute(iterator)
      })
    }

    for (let i = 0; i < limit; i++) {
      execute(iterator)
    }

  })
}
```
