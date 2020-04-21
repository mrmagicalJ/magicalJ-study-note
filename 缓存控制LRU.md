# LRU

```javascript
class LRUCache {
  constructor(length) {
    this.caches = Object.create(null)
    this.keys = []
    this.length = length
  }
  put(key, val) {
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
    } else if (this.keys.length === this.length) {
      const delKey = this.keys.shift()
      delete this.caches[delKey]
    }
    this.keys.push(key)
    this.caches[key] = val
  }
  get(key) {
    const index = this.keys.indexOf(key)
    if (index > -1) {
      this.keys.splice(index, 1)
      this.keys.push(key)
      return this.caches[key]
    } else {
      return -1
    }
  }
  console() {
    console.log(this.keys, this.caches)
  }
}

const cache = new LRUCache(2)
cache.put(1, 1)
cache.console()
cache.put(2, 2)
cache.console()
cache.get(1) // 1
cache.console()
cache.put(3, 3) // 密钥 2 废除
cache.console()
cache.get(2) // -1
cache.console()
cache.put(4, 4) // 密钥 1 废除
cache.console()
cache.get(1) // -1
cache.console()
cache.get(3) // 3
cache.console()
cache.get(4) // 4
cache.console()
```
