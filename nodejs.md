# node

**前置-使用vscode编辑nodejs，智能代码提示**
使用vscode编写node发现好多没有代码提示，于是搞了一下

1. 初始化package.json，一般已经拥有了，直接下一步
2. 寻找你想要的代码提示片段，如我们使用的是node，可以去[TypeSearch](http://microsoft.github.io/TypeSearch/)搜索,node搜索返回的是@types/node
3. `cnpm i @types/node -D`,之后就有提示啦~

## 为什么使用nodejs

在高并发，I/O密集的场景性能优势明显

`非阻塞I/O` `事件驱动` 内部实现（观察者模式）
nodejs的单线程只针对主进程，I/O系统底层多线程调度（交由系统完成）
单线程并不是单进程，js有专门的模块cluster，做集群的，多核cpu也可以用上，不会造成闲置

**CPU密集**
压缩、解压、加密、解密

**I/O密集**
文件操作、网络操作、数据库

## web常见场景

* 静态资源读取
* 数据库操作
* 渲染页面

**高并发**
单位时间内访问量很大
寻常应对方案

1. 增加服务器数量 - 通过负载均衡，摊到不同的机器去处理
2. 增加每台服务器cpu核数 - 多核

## 进程

1. 可以理解为单个执行中的程序，（正在进行中的程序）
2. 多进程：启动多个进程，多个进程一起执行多个任务，底层原理无论运用什么调度算法，都是在多个任务间进行快速切换
3. 线程数是有限的，超过之后就只能排队了

**线程**
进程内一个相对独立的、可执行的调度单元，与同属一个进程的线程共享进程的资源

## 常用场景

* Web Server
* 本地代码构建
* 实用工具开发

## 常用Api

### Buffer

全局变量，无需require
Buffer用来处理二进制数据流
实例类似整数数组，大小固定
c++代码在V8堆外分配物理内存

#### 常用类方法

`Buffer.from()` `Buffer.concat()` `Buffer.isBuffer()` `Buffer.byteLength()`
申请固定长度的Buffer `Buffer.alloc()`

#### 常用实例方法

`buffer.length` `buffer.toString()` `buffer.fill()` `buffer.equals()` `buffer.indexOf()` `buffer.copy()`
解决中文乱码问题，使用 string_decoder 的
StringDecoder

```javascript
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8') //选择编码方式
// decoder.write() 使用此方法解决中文乱码问题
```

### events

```javascript
const EventEmitter = require('events');

class MyEvent extends EventEmitter {

}

const myevent = new MyEvent();
myevent.on('test', info => {
  console.log('test', info)
})
// 只触发一次
// myevent.once('test', info => {
//   console.log('test', info)
// })

setTimeout(() => {
  myevent.emit('test', 'xxx')
}, 500)

// 如何移除事件
function say () {
  console.log('something')
}
myevent.on('test', say)
// 移除指定事件
myevent.removeListener('test', say)
// 移除所有事件
myevent.removeAllListeners('test')
```

### fs

```javascript
const fs = require('fs')
// 读取文件
fs.readFile('path', (err, data) => {
  if (err) { console.log(err) }
  console.log(data) //是一个Buffer对象，可以使用toString转换为string
})
// 也可以加一个参数，encoding格式，返回的直接就是string
fs.readFile('path', 'utf8', (err, data) => {
  if (err) { console.log(err) }
  console.log(data)
})

// 使用流读取文件
const rs = fs.createReadStream('path');
rs.pipe(process.stdout) //输出到控制台

// 使用流写文件
const ws = fs.createWriteStream(path);
const interval = setInterval(() => {
  const num = ~~(Math.random() * 10);
  if (num < 5) {
    ws.write(num + '')
  } else {
    clearInterval(interval)
    ws.end()
  }
}, 200)

ws.on('finish', () => {
  console.log('finish')
})

// 监听文件
fs.watch('./', {
  // 是否递归
  recursive: true,
}, (eventType, filename) => {
  console.log(eventType, filename)
})

// 写文件
// fs.writeFile()

// 获取文件信息
// fs.stat()

// 重命名
// fs.rename()

// 删除文件
// fs.unlink()

// 读文件夹
// fs.readdir()

// 创建文件夹
// fs.mkdir()

// 删除文件夹
// fs.rmdir()

```

### 解决回调地狱问题

```javascript
const fs = require('fs');
// 将普通回调(第一个参数是error类型的)，转化为promise函数
const { promisify } = require('util');

const read = promisify(fs.readFile)

// promise 形式
read('path').then(data => {
  console.log(data.toString());
}).catch(err => {
  console.log(err);
})

// async await 形式
async function test () {
  try {
    const data = await read('path');
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}
```

还有很多封装好的第三方库可以使用
