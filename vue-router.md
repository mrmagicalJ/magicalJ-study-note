# vue-router 源码

## 判断是否是浏览器

```javascript
export const inBrowser = typeof window !== 'undefined'
```

## 获取页面滚动条位置

```javascript
window.pageXOffset
window.pageYOffset
```

## 获取页面视口大小

```javascript
function getViewportSize () {
  let width = window.innerWidth
  let height = window.innerHeight
  if (typeof width !== 'number') {
    if (document.compatMode === 'CSS1Compat') {
      width = document.documentElement.clientWidth
      height = document.documentElement.clientHeight
    } else {
      width = document.body.clientWidth
      height = document.body.clientHeight
    }
  }

  return { width, height }
}
```
