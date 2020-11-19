# HTTP的缓存控制

## 缓存的作用

缓存策略可以缩短网页请求资源的距离，减少延迟，还可以减少带宽，降低网络负荷。

## 缓存分类

### 强缓存

不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示`from disk cache`或`from memory cache`。

#### 如何判断命中

浏览器在加载资源时根据`http header`中`Expires`和`Cache-Control`判断是否命中强缓存,未命中才会判断协商缓存

#### Expires

**格式**：`expires: Tue, 24 Nov 2020 01:57:10 GMT`

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。是`HTTP1.0`的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效

#### Cache-Control

**格式**：`cache-control: max-age=604800`

缓存过期的相对时间，这里的 max-age 是“生存时间”（又叫“新鲜度”“缓存寿命”，类似 TTL，Time-To-Live），单位为秒。是`HTTP1.1`的产物，用来改进`Expires`，所以当二者同时存在时，`cache-control`优先级更高。

**常用指令：**

- **禁止缓存**`Cache-Control: no-store`：缓存中不得存储任何关于客户端请求和服务端响应的内容。用于某些变化非常频繁的数据，例如秒杀页面
- **强制确认缓存**`Cache-Control: no-cache`：资源被缓存，但是立即失效，使用之前必须要去服务器验证是否过期

### 协商缓存

协商缓存就是强制缓存失效后，浏览器只返回当前缓存标识，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：

- 协商缓存生效，返回304和Not Modified
- 协商缓存失效，返回200和请求结果

#### 如何判断命中协商缓存

##### Last-Modified & If-Modified-Since

1. 浏览器在第一次访问资源时，服务器会在`Response Headers`中添加`last-modified: Thu, 21 Jun 2020 06:51:02 GMT`，该时间代表资源的最后修改时间
2. 浏览器再次请求该资源，检测到存在`last-modified`会在`Request Headers`添加`if-modified-since: Thu, 21 Jun 2020 06:51:02 GMT`，值就是`last-modified`的值
3. 服务器拿到该时间与资源的最后修改对比，如果相同则命中，返回304和Not Modified，否则返回200和请求结果

存在如下问题：有时文件未修改但是最后修改时间变了，或者文件已修改但最后修改时间却未变

##### ETag & If-None-Match

在 HTTP1.1 出现，用来改进`Last-Modified & If-Modified-Since`，同时存在的情况下优先级更高

1. 浏览器在第一次访问资源时，服务器会在`Response Headers`中添加`etag: W/"5f842be5-189c"`，该值
2. 浏览器再次请求该资源，检测到存在`etag`会在`Request Headers`添加`if-none-match: W/"5f842be5-189c"`，值就是`etag`的值
3. 服务器拿到该值与资源的`etag`对比，如果相同则命中，返回304和Not Modified，否则返回200和请求结果

## 缓存位置

浏览器中的缓存位置一共有四种，按优先级从高到低排列分别是：

- Service Worker
- Memory Cache
- Disk Cache
- Push Cache

### Service Worker

Service Worker 借鉴了 Web Worker的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问DOM。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 Service Worker Cache。

### Memory Cache

内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了。

### Disk Cache

磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长。

### Push Cache

推送缓存，它是 HTTP/2 中的内容

## 客户端的缓存控制

当你按“刷新”按钮时，浏览器会在请求头里加一个 `Cache-Control: max-age=0`，强制刷新呢，会发一个 `Cache-Control: no-cache`，这两个含义差不多，就看后台的服务器怎么理解，通常两者的效果是相同的。

“前进”，“后退”，浏览器并不会添加
