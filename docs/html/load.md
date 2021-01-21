# script标签异步加载

渲染引擎在渲染解析 HTML 的时候，如果遇到 script 标签，会暂停解析过程，同时通知网络进程加载文件，文件加载后会切换至 JavaScript 引擎来执行对应代码，代码执行完成之后切换至渲染引擎继续渲染页面。

为了减少首屏加载一些暂时用不到的js这些时间损耗，可以借助 script 标签的 3 个属性来实现。

- **async**: 立即请求文件，但不阻塞渲染引擎，而是文件加载完毕后阻塞渲染引擎并立即执行文件内容。
- **defer**: 立即请求文件，但不阻塞渲染引擎，等到解析完 HTML 之后再执行文件内容。
- **type="module"**: 让浏览器按照 ECMA Script 6 标准将文件当作模块进行解析，默认阻塞效果同 defer，也可以配合 async 在请求完成后立即执行。

除此之外还应当注意，当渲染引擎解析 HTML 遇到 script 标签引入文件时，会立即进行一次渲染。所以这也就是为什么构建工具会把编译好的引用 JavaScript 代码的 script 标签放入到 body 标签底部，因为当渲染引擎执行到 body 底部时会先将已解析的内容渲染出来，然后再去请求相应的 JavaScript 文件。如果是内联脚本（即不通过 src 属性引用外部脚本文件直接在 HTML 编写 JavaScript 代码的形式），渲染引擎则不会渲染。

## 为什么操作 DOM 耗时

### 线程切换

览器包含渲染引擎（也称浏览器内核）和 JavaScript 引擎，它们都是单线程运行。单线程的优势是开发方便，避免多线程下的死锁、竞争等问题，劣势是失去了并发能力。

浏览器为了避免两个引擎同时修改页面而造成渲染结果不一致的情况，增加了另外一个机制，这两个引擎具有互斥性，也就是说在某个时刻只有一个引擎在运行，另一个引擎会被阻塞。操作系统在进行线程切换的时候需要保存上一个线程执行时的状态信息并读取下一个线程的状态信息，俗称上下文切换。而这个操作相对而言是比较耗时的。这就带来了**性能损耗**。单次切换消耗的时间是非常少的，但是如果频繁地大量切换，那么就会产生性能问题。

### 重新渲染

另一个更加耗时的因素是元素及样式变化引起的再次渲染，在渲染过程中最耗时的两个步骤为**重排**（Reflow）与**重绘**（Repaint）。

可能会影响到其他元素排布的操作就会引起重排，继而引发重绘，比如：

- 修改元素边距、大小。
- 添加、删除元素。
- 改变窗口大小。

与之相反的操作则只会引起重绘，比如：

- 设置背景图片。
- 修改字体颜色。
- 改变 visibility 属性值。

## 浏览器如何渲染页面

1. 收到字节流
2. 字节流解码，得到字符
3. 输入流预处理，得到统一字符
4. 令牌化(分词)，得到令牌
5. 构建 DOM 树
6. css -> 构建 CSSOM 树
7. 合并 DOM 树与 CSSOM 树为**渲染树**
8. 生成了渲染树之后，就可以进入布局阶段了，布局就是计算元素的大小及位置。
9. 绘制