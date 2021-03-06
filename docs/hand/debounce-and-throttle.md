# 防抖与节流

在前端开发过程中，我们会遇到一些高频触发事件，such as `resize` `scroll` `mousemove` 等，对于这些高频操作有时候需要一些特定的处理，就会用到防抖与节流。

## 防抖

* **场景**：我们有一个输入框，需要远程联想，那么在 `input` 事件触发后，我们就会去调用接口获取联想数据，在用户输入完毕后，期间会调用多次接口并且是无用的，那么我们如何处理呢？使用防抖。
* **原理**：我们每次 `input` 事件触发后不直接去调用接口，而是设置一个时间间隔，例如 0.5s、1s…… 在这个时间间隔内，如果再次触发了 `input` 事件，则重置这个时间间隔，**也就是说**，在这个时间间隔内再次触发事件，我们就认为用户还没有操作完毕，不执行后续操作，当这个时间间隔内没有操作了，就认为用户操作完毕了，执行后续操作。
* **编码**：

```javascript
/**
 * 对函数进行防抖包装
 * @param {function} fn 需要防抖的函数
 * @param {number} time 延迟时间
 * @returns {function} 防抖处理过的函数
 */
function debounce (fn, time) {
  let timeout;

  return function (...args) {
    const self = this;
    if (timeout) { clearTimeout(timeout) }

    timeout = setTimeout(() => {
      fn.apply(self, args)
    }, time)
  }

}
```

立即执行版本

```javascript
function debounce(fn, interval, immediate) {
  let timeout

  return function(...args) {
    if (immediate && !timeout) {
      fn.apply(this, args)
      timeout = setTimeout(() => timeout = null, interval)
    } else {
      timeout && clearTimeout(timeout)

      timeout = setTimeout(() => {
        fn.apply(this, args)
        timeout = null
      }, interval)
    }
  }
}
```

## 节流

* **场景**
* **原理**
对高频操作进行稀释，增加触发间隔。
* **编码**

```javascript
/**
 * 对函数进行节流包装
 * @param {function} fn 需要节流的函数
 * @param {number} time 触发间隔
 * @returns {function} 节流处理过的函数
 */
function throttle(fn, wait) {
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    const self = this;
    if (now - previous > wait) {
      fn.apply(self, args);
      previous = now;
    }
  }
}
```
