# HTTP的缓存控制

## 服务器的缓存控制

### Cache-Control

`Cache-Control: max-age=30`

这里的 max-age 是“生存时间”（又叫“新鲜度”“缓存寿命”，类似 TTL，Time-To-Live），时间的计算起点是响应报文的创建时刻（即 Date 字段，也就是离开服务器的时刻），而不是客户端收到报文的时刻，也就是说包含了在链路传输过程中所有节点所停留的时间。

#### 禁止缓存

`Cache-Control: no-store`，缓存中不得存储任何关于客户端请求和服务端响应的内容。

用于某些变化非常频繁的数据，例如秒杀页面

####　强制确认缓存

`Cache-Control: no-cache`，使用之前必须要去服务器验证是否过期

#### 缓存验证确认

`Cache-Control: must-revalidate`,缓存不过期就可以继续使用，过期了就必须去服务器验证

## 客户端的缓存控制

当你按“刷新”按钮时，浏览器会在请求头里加一个 `Cache-Control: max-age=0`，强制刷新呢，会发一个 `Cache-Control: no-cache`，这两个含义差不多，就看后台的服务器怎么理解，通常两者的效果是相同的。

“前进”，“后退”，浏览器并不会添加

## 条件请求

1. 浏览器第一次请求资源，没有缓存，服务器会返回相应内容，并且加上 `Cache-Control` 和 `ETag`
2. 浏览器再次请求该资源时，会带上 `If-None-Match`，内容就是之前服务器返回的 `ETag`
3. 服务器根据 `If-None-Match` 判断资源是否变化，如果未变化，服务器会返回 `304 Not Modified`，表示缓存依然有效，浏览器就可以更新一下有效期，然后放心大胆地使用缓存了。

`If-Modified-Since` `Last-modified`
