# 异步

主流的异步处理方案主要有：回调函数(CallBack)、Promise、Generator函数、async/await。这一小节，我们通过一个小例子，对比这几种异步处理方案的不同

我们预先设定一个场景，假设我们要请求三次服务器，每一次的请求依赖上一次请求的结果

## 回调函数(CallBack)

```javascript
function getData(url, callback) {
  // 模拟发送网络请求
  setTimeout(() => {
    const res = {
      code: 0,
      data: Date.now()
    }
    callback(res)
  }, 1000)
}

getData(`/url?param=1`, (res1) => {
  console.log(res1)
  getData(`/url?param=${res1.data}`, (res2) => {
    console.log(res2)
    getData(`/url?param=${res2.data}`, (res3) => {
      console.log(res3)
    })
  })
})
```

由于后续请求依赖前一个请求的结果，所以我们只能把下一次请求写到上一次请求的回调函数内部，这样就形成了常说的：回调地狱（回调金字塔）

## promise

```javascript
function getDataByPromise(url) {
  return new Promise((resolve, reject) => {
    // 使用前文的getData
    getData(url, resolve)
  })
}

getDataByPromise(`/url?param=1`)
  .then(res1 => {
    console.log(res1)
    return getDataByPromise(`/url?param=${res1.data}`)
  })
  .then(res2 => {
    console.log(res2)
    return getDataByPromise(`/url?param=${res2.data}`)
  })
  .then(res3 => {
    console.log(res3)
  })
```

**Promise优缺点**:

- 优点：解决回调地狱, 对异步任务写法更标准化与简洁化
- 缺点：
  - 无法取消Promise，一旦新建它就会立即执行，无法中途取消
  - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
  - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成)
  - 当我们要添加很多 then 语句， 每一个 then 还是要写一个回调。如果场景再复杂一点，比如后边的每一个请求依赖前面所有请求的结果，而不仅仅依赖上一次请求的结果，那会更复杂

为了做的更好，async/await 就应运而生了，来看看使用 async/await 要如何实现

## async/await

```javascript
async function getDataByAsync() {
  // 使用前文的getDataByPromise
  const res1 = await getDataByPromise(`/url?param=1`)
  console.log(res1)
  const res2 = await getDataByPromise(`/url?param=${res1.data}`)
  console.log(res2)
  const res3 = await getDataByPromise(`/url?param=${res2.data}`)
  console.log(res3)
}

getDataByAsync()
```

对比`Promise`感觉怎么样？是不是非常清晰，但是`async/await`是基于`Promise`的，因为使用`async`修饰的方法最终返回一个`Promise`，实际上，`async/await`**可以看做是**使用`Generator`函数处理异步的语法糖，我们来看看如何使用`Generator`函数处理异步。

## Generator

```javascript
function * getDataByGenerator() {
  const res1 = yield getDataByPromise(`/url?param=1`)
  console.log(res1)
  const res2 = yield getDataByPromise(`/url?param=${res1.data}`)
  console.log(res2)
  const res3 = yield getDataByPromise(`/url?param=${res2.data}`)
  console.log(res3)
}

const g = getDataByGenerator()
g.next().value.then(res1 => {
  g.next(res1).value.then(res2 => {
    g.next(res2).value.then(res3 => {
      g.next(res3)
    })
  })
})
```

上面的代码，我们逐步调用遍历器的`next()`方法，由于每一个`next()`方法返回值的`value`属性为一个`Promise`对象，所以我们为其添加`then`方法，在`then`方法里面接着运行`next`方法挪移遍历器指针，直到`Generator`函数运行完成，实际上，这个过程我们不必手动完成，可以封装成一个简单的执行器

```javascript
function run(gen) {
  const g = gen()

  function next(data) {
    const res = g.next(data)
    if (res.done) return res.value
    res.value.then(data => {
      next(data)
    })
  }

  next()
}

run(getDataByGenerator)
```

这样，我们就可以把异步操作封装到`Generator`函数内部，使用`run`方法作为`Generator`函数的自执行器，来处理异步。其实我们不难发现，`async/await`方法相比于`Generator`处理异步的方式，有很多相似的地方，只不过`async/await`在语义化方面更加明显，同时`async/await`不需要我们手写执行器，其内部已经帮我们封装好了，这就是为什么说`async/await`可以看做是`Generator`函数处理异步的语法糖了。
