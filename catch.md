# 缓存

缓存控制策略就是 http caching 的策略，化繁为简，最有效的策略往往是很简单的。在最简单的粗略下，你对 http cache 只需要了解一个`Cache-Control`的头部

带指纹资源: 永久缓存
非带指纹资源: 每次进行新鲜度校验

## 带指纹资源: 永久缓存

```javascript
Cache-Control: max-age=31536000
```

1. 静态资源带有`hash`值，即指纹
2. 对资源设置一年过期时间，即 31536000，一般认为是永久缓存
3. 在永久缓存期间浏览器不需要向服务器发送请求

那为什么带有 hash 值的资源可以永久缓存呢？

**因为该文件的内容发生变化时，会生成一个带有新的`hash`值的URL**,前端将会发起一个新的URL的请求

## 非带指纹资源: 每次进行新鲜度校验

```javascript
Cache-Control: no-cache
```

1. 由于不带有指纹，每次都需要校验资源的新鲜度。(从缓存中取到资源，可能是过期资源)
2. 如果校验为最新资源，则从浏览器的缓存中加载资源

即使每次校验新鲜度，也不需要每次都从服务器下载资源: **如果浏览器/CDN上缓存经校验没有过期**。这被称为协商缓存，此时 http 状态码返回 304，指`Not Modified`，即没有变更。

而对于协商缓存，也有它们自己的算法，协商缓存的背后基于响应头`Last-Modified/ETag`。浏览器每次请求资源时，会携带上次服务器响应的`ETag/Last-Modified`作为标志，与服务端此时的`ETag/Last-Modified`作比较，来判断内容更改。