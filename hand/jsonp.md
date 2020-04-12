# jsonp

```javascript
function jsonp(url, params, cb) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    window[cb] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }

    params = { ...params, cb }
    const paramArr =  Object.entries(params).map(([key, value]) => `${key}=${value}`)
    script.src = `${url}?${paramArr.join('&')}`
    document.body.appendChild(script)
  })
}
```
