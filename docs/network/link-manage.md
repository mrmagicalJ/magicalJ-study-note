## 链接管理

### 短连接(（short-lived connections）)

### 长连接/持久连接(persistent connections)

Connection: keep-alive

### 对头阻塞(Head-of-line blocking)

HTTP报文是一个队列，如果队首的请求阻塞了，那么队列后面所有请求都需等待

#### HTTP/1.1 - 并发连接(concurrent connections)

同时对一个域名发起多个长连接，一个队列阻塞了没关系，切换到其他不阻塞的队列
缺陷就是并发高了服务器扛不住，众多浏览器把每个域名的并发数限制在6~8。

### 域名分片(domain sharding)

HTTP协议和浏览器限制并发连接数量，那就多开几个域名，这些域名都指向同一台服务器